const mongoose = require('mongoose')
// const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

taskSchema.pre('save', (next) => {
    const user = this
    // Middleware stuffs befor saving goes here UwU
    next()
})

const Task = mongoose.model('Task', taskSchema)

// const task = new Tasks({
//     description: 'New Task One',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((err) => {
//     console.log(err)
// })

module.exports = Task