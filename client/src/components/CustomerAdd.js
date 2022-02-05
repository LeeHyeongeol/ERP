import React from 'react'

import { post } from 'axios';



class CustomerAdd extends React.Component {



    constructor(props) {

        super(props);

        this.state = {

            file: null,

            userName: '',

            birthday: '',

            gender: '',

            job: '',

            fileName: ''

        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.handleFileChange = this.handleFileChange.bind(this)

        this.handleValueChange = this.handleValueChange.bind(this)

        this.addCustomer = this.addCustomer.bind(this)

    }



    handleFormSubmit(e) {

        e.preventDefault()

        this.addCustomer()

            .then((response) => {

                console.log(response.data);

            })

    }



    handleFileChange(e) {

        this.setState({

            file: e.target.files[0],

            fileName: e.target.value

        });

    }


    handleValueChange(e) {

        let nextState = {};

        nextState[e.target.name] = e.target.value;

        this.setState(nextState);

    }



    addCustomer() {

        const url = '/api/customers';

        const formData = new FormData();

        formData.append('image', this.state.file)

        formData.append('name', this.state.userName)

        formData.append('birthday', this.state.birthday)

        formData.append('gender', this.state.gender)

        formData.append('job', this.state.job)

        const config = {

            headers: {

                'content-type': 'multipart/form-data'

            }

        }

        return post(url, formData, config)

    }



    render() {

        return (

            <form onSubmit={this.handleFormSubmit}>

                <h1>고객 추가</h1>

                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />

                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />

                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />

                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />

                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />

                <button type="submit">추가하기</button>

            </form>

        )

    }

}



export default CustomerAdd



// 출처: https://ndb796.tistory.com/222?category=1030599 [안경잡이개발자]

// //고객 추가 양식
// import React from 'react'
// import { post } from 'axios'
// import { useState } from 'react'

// function customerAdd() {

//     const [file, setFile] = useState(null) //bite형태의 데이터
//     const [username, setUsername] = useState('')
//     const [birthday, setBirthday] = useState('')
//     const [gender, setGender] = useState('')
//     const [job, setJob] = useState('')
//     const [filename, setFilename] = useState('') //파일 이미지 이름

//     function handleFormSubmit(e) {
//         e.preventDefault()
//         addCustomer().then(res => {
//             console.log(res.data)
//         })
//     }
//     function handleFileChange(e) {
//         setFile(e.target.files[0])
//         setFilename(e.target.value)
//     }

//     function handleValueChange(e) {
//         setUsername(e.target.value)
//     }

//     function addCustomer() {
//         const url = '/api/customers';
//         const formData = new FormData();
//         formData.append('image', file);
//         formData.append('name', username);
//         formData.append('birthday', birthday);
//         formData.append('gender', gender);
//         formData.append('job', job);
//         //파일이 포함된 내용을 서버로 전송할 경우,
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         }
//         //실제로 서버로 데이터를 보내는 코드
//         return post(url, formData, config);
//     }

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit} >
//                 <h1>고객추가</h1>
//                 <br>프로필 이미지: <input type="file" file={file} value={filename} onChange={handleFileChange} /></br>
//                 <br>이름: <input type="text" name="username" value={username} onChange={handleValueChange} /></br>
//                 <br>생년월일: <input type="text" name="birthday" value={birthday} onChange={handleValueChange} /></br>
//                 <br>성별: <input type="text" name="gender" value={gender} onChange={handleValueChange} /></br>
//                 <br>직업: <input type="text" name="job" value={job} onChange={handleValueChange} /></br>
//                 <button type="submit">추가하기</button>
//             </form>
//         </div>
//     )
// }
// //app.js에서 사용되기 때문에 외부 라이브러리가 사용할 수 있도록 export default를 적용해야함
// export default customerAdd