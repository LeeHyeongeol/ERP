const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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

    )
})

app.listen(port, () => console.log(`Listening on port ${port}`))