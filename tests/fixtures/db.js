const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Task = require('../../src/models/task')
const User = require('../../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Test User1',
    email: 'testuser1@test.com',
    password: 'Test12345!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Test User2',
    email: 'testuser2@test.com',
    password: 'Test123!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First Task',
    completed: 'true',
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second Task',
    completed: 'false',
    owner: userOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third Task',
    completed: 'true',
    owner: userTwo._id
}

const setupTestDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOne,
    userOneId,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupTestDatabase
}