const db = require('./db')
const User = require('./models/user')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findAll = async () => {
  const users = await User.find()
  console.log("All users:", users)
}

// create user one
const createUser = async () => {
  const newUser = {name: "Lark", age:23, status:"pending"} 
    await User.insertOne(newUser)
  console.log("New User Created!")
}

// delete user one
const deleteUser = async () => {
  const deletingUser = { name: "Claire", age: 28, status: "active" }
  await User.deleteOne(deletingUser)
  console.log("Deleting One User")
}

// update user one
const updateUser = async () => {
  const updatingUser = { $set: { name: "Lizzy", age: 28, status: "active" } }
  User.updateOne( { name: "Elizabeth" }, updatingUser )
  console.log("Updating User")
}

// findAllNames one
const findAllNames = async () => {
  const allNames = { name:1 }
  User.find({}, allNames)
}

// findAllOlderThan25
const findAllOlderThan25 = async () => {
  const older25User = ( { age:{ $gt: 25} } )
  User.find(older25User)
}

// active and less then 25
const findActiveLessThan25 = async () => {
  const activeUnder25Users = ({ status: "active", age: { $lt: 25 } })
  User.find(activeUnder25Users)
}

const run = async () => {
  await findAll()
  await createUser()
  await deleteUser()
  await updateUser()
  await findAllNames()
  await findAllOlderThan25()
  await findActiveLessThan25()
  process.exit()  
}

run()