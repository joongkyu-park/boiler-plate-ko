const express = require('express') // expres 모듈을 가져옴
const app = express()  // 가져온 모듈의 함수를 통해 express 앱을 만든다. express 앱을 app이라는 변수에 넣음
const port = 5000  // port 번호 지정

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jkpark:135798@boilerplate.g8s91.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!!'))  // 루트디렉로티에 오면 'Hello World!!'를 출력해라 는 듯.

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))  // 콘솔에 다음과 같은 말을 띄우고 앱을 실행