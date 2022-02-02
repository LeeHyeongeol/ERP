import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'

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

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com//64/64/1',
    'name': '이현걸',
    'birthday': '960924',
    'gender': '남자',
    'job': '학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com//64/64/2',
    'name': '김영빈',
    'birthday': '960924',
    'gender': '남자',
    'job': '학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com//64/64/3',
    'name': '지영서',
    'birthday': '960924',
    'gender': '남자',
    'job': '학생'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com//64/64/4',
    'name': '박윤정',
    'birthday': '960924',
    'gender': '남자',
    'job': '학생'
  }
]


function App(props) {
  const { classes } = props
  return (
    <Paper className={classes.root}>
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
        <TableBody>{/* 내용을 출력하는 부분 */}
          {customers.map((info) => {
            return <Customer key={info.id} id={info.id} image={info.image} name={info.name} birthday={info.birthday} gender={info.gender} job={info.job}
            />
          })}
        </TableBody>
      </Table>
    </Paper>
    //div태그로 꼭 감싸줘야함!!
  );
}

export default withStyles(styles)(App);
