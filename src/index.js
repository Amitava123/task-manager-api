const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// This below middleware will stop execution express to load routes when POST method is selected
// app.use((req, res, next) => {
//     if(req.method === 'POST')
//         res.send('GET Requests are disabled!')
//     else
//         next()
// })

// Maintaince Mode:
// app.use((req, res, next) => {
//     res.status(503).send('Server is under Maintaince!')
// })

// File Uploads
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//          fileSize: 1000000
//     },
    // filefilter(req, file, cb) {
    //     if(!file.originalname.match(/\.(doc|docx)$/))
    //         return cb(new Error('Please upload a Word Document!'))
    //     cb(undefined, true)
    // }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is listening in Port '+port)
})

// Demonstration of Bcrypt.Js
// const bcrypt = require('bcryptjs')
// const myFnc = async () => {
//     const passwd = 'Hello123!'
//     const hashed = await bcrypt.hash(passwd, 8)

//     console.log(passwd)
//     console.log(hashed)

//     console.log(await bcrypt.compare('hello123!', hashed))
// }

// myFnc()

// Demo of jwt
// const jwt = require('jsonwebtoken')

// const myFunc = async () => {
//     const token = await jwt.sign({ _id: 'abc123' }, 'thisisatoken', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisissatoken')
//     console.log(data)
// }

// myFunc()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f61a28634c18215baf4886b')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f61a4f06da831172bcfeb3c')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()