const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json') //동기적 처리를 통해 db의 데이터를 먼저 가져오고 서버가 클라이언트에 정보를 주는 과정이 진행되도록 함.
const conf = JSON.parse(data)
const mysql = require('mysql')

const connection = mysql.createConnection({ //mysql과 연결
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

connection.connect()

const multer = require('multer')
const upload = multer({ dest: './upload' })

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => { //행에 데이터가 담기는데 그것을 보내주면 된다.
            res.send(rows);
        }
    )
})

app.use('/image', express.static('./upload')) //사용자는 image 파일에 접근하는데 실제서버의 upload와 맵핑이 된다.


app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?)'
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    console.log(name, image, birthday, gender, job)
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
})
app.listen(port, () => console.log(`Listening on port ${port}`))