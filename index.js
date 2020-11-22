const express = require('express') // expres ����� ������
const app = express()  // ������ ����� �Լ��� ���� express ���� �����. express ���� app�̶�� ������ ����
const port = 5000  // port ��ȣ ����

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jkpark:135798@boilerplate.g8s91.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!!'))  // ��Ʈ�𷺷�Ƽ�� ���� 'Hello World!!'�� ����ض� �� ��.

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`))  // �ֿܼ� ������ ���� ���� ���� ���� ����