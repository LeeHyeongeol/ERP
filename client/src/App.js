import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react';

// 해당 파일에서 필요한 컴포넌트만 가져올 때 중괄호로 감쌈

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


function App(props) {

  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    callApi()
      .then(result => setCustomers(result))
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }


  const { classes } = props;

  return (
    <Paper className={classes.root}>
      {console.log(customers)}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers ? (
            customers.map((info, idx) => {
              return (
                <Customer
                  key={idx}
                  id={info.id}
                  image={info.image}
                  name={info.name}
                  birthday={info.birthday}
                  gender={info.gender}
                  job={info.job}
                />
              );
            })
          ) : "customer가 없습니다."}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
