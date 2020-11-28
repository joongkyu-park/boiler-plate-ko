const express = require('express') // expres ����� ������
const app = express()  // ������ ����� �Լ��� ���� express ���� �����. express ���� app�̶�� ������ ����
const port = 5000  // port ��ȣ ����
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



app.get('/', (req, res) => res.send('Hello World!!'))  // ��Ʈ�𷺷�Ƽ�� ���� 'Hello World!!'�� ����ض� �� ��.



app.post('/register',(req, res) => {

    // ȸ�� ���� �� �� �ʿ��� �������� client���� ��������
    // �װ͵��� �����ͺ��̽��� �־��ش�.

    const user = new User(req.body)

    user.save((err,userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success:true
        })

    })
})


app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))  // �ֿܼ� ������ ���� ���� ���� ���� ����