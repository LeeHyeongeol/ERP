import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress'
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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})


function App(props) {

  const [customers, setCustomers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [completed, setCompleted] = useState(0) //게이지가 0-100 까지 차는 로딩변수를 사용할 것이기 때문에 초기값을 0으로 설정한다.


  setInterval(() => progress(), 20)
  useEffect(() => {
    setInterval(() => {
      if (completed >= 100) {
        setCompleted(0)
      } else {
        setCompleted(completed + 1);
      }
    })
    console.log(completed)
    callApi()
      .then(result => setCustomers(result))
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  const progress = () => {
    if (completed >= 100) {
      setCompleted(0)
    } else {
      setCompleted(completed + 1)
      // }
    }
  }

  const { classes } = props;

  return (
    <Paper className={classes.root}>
      {console.log(customers)}
      {console.log(completed)}
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
          ) : <TableRow>
            <TableCell colSpan='6' align="center">
              <CircularProgress className={classes.progress} variant="indeterminate" value={completed} />
            </TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
