import './App.css';
import Customer from './components/Customer';

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


function App() {
  return (
    <div>
      {customers.map((info) => {
        return <Customer key={info.id} id={info.id} image={info.image} name={info.name} birthday={info.birthday} gender={info.gender} job={info.job}
        />
      })}
    </div>
    //div태그로 꼭 감싸줘야함!!
  );
}

export default App;
