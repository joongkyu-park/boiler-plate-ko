const express = require('express') // expres 모듈을 가져옴
const app = express()  // 가져온 모듈의 함수를 통해 express 앱을 만든다. express 앱을 app이라는 변수에 넣음
const port = 5000  // port 번호 지정
const bodyParser = require('body-parser');

const config = require('./config/key');

const {User} = require("./models/User");


// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!!'))  // 루트디렉로티에 오면 'Hello World!!'를 출력해라 는 듯.



app.post('/register',(req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err,userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success:true
        })

    })
})


app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))  // 콘솔에 다음과 같은 말을 띄우고 앱을 실행