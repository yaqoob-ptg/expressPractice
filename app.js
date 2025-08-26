// const express = require('express')
// const { v4: uuidv4 } = require('uuid');

// const app = express()

// app.use(express.json())

// const port = 8080
// app.listen(port, '0.0.0.0', () => {
//     console.log(`app is running on port ${port}`);

// })



// let users = [{
//         "id": uuidv4(),
//         "name": "Alice Johnson",
//         "email": "alice.johnson@example.com",
//         "age": 29,
//         "skills": ["JavaScript", "React", "Node.js"],
//         "hobbies": ["Reading", "Hiking"],
//         "address": "123 Main St, New York, NY, USA"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Bob Smith",
//         "email": "bob.smith@example.com",
//         "age": 35,
//         "skills": ["Python", "Django", "SQL"],
//         "hobbies": ["Cycling", "Photography"],
//         "address": "456 Oak Ave, Los Angeles, CA, USA"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Charlie Davis",
//         "email": "charlie.davis@example.com",
//         "age": 32,
//         "skills": ["Java", "Spring Boot", "Kotlin"],
//         "hobbies": ["Chess", "Traveling"],
//         "address": "78 Baker St, London, UK"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Diana Martinez",
//         "email": "diana.martinez@example.com",
//         "age": 27,
//         "skills": ["UI/UX Design", "Figma", "Illustrator"],
//         "hobbies": ["Cooking", "Drawing"],
//         "address": "Calle Mayor 15, Madrid, Spain"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Ethan Wang",
//         "email": "ethan.wang@example.com",
//         "age": 30,
//         "skills": ["Go", "Docker", "Kubernetes"],
//         "hobbies": ["Gaming", "Swimming"],
//         "address": "88 Nanjing Rd, Shanghai, China"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Fatima Al-Hassan",
//         "email": "fatima.alhassan@example.com",
//         "age": 33,
//         "skills": ["C#", ".NET", "Azure"],
//         "hobbies": ["Reading", "Traveling"],
//         "address": "Sheikh Zayed Rd 101, Dubai, UAE"
//     },
//     {
//         "id": uuidv4(),
//         "name": "George Peterson",
//         "email": "george.peterson@example.com",
//         "age": 40,
//         "skills": ["Ruby", "Rails", "PostgreSQL"],
//         "hobbies": ["Fishing", "Cycling"],
//         "address": "789 Maple Dr, Chicago, IL, USA"
//     },
//     {
//         "id": uuidv4(),
//         "name": "Hiroshi Tanaka",
//         "email": "hiroshi.tanaka@example.com",
//         "age": 28,
//         "skills": ["Dart", "Flutter", "Firebase"],
//         "hobbies": ["Photography", "Traveling"],
//         "address": "1-2-3 Shibuya, Tokyo, Japan"
//     }
// ];


// app.get('/api/users/get', (req, res) => {
//     // res.send('Hello world');
//     res.json({ message: 'Users document', users: users });
// });

// app.post('/api/users/post', (req, res) => {
//     const reqbody = req.body;

//     if (!reqbody) {
//         return res.status(406).json({ message: 'fields are empty', })
//     }

//     users.push({...reqbody, id: uuidv4() })
//     return res.status(200).json({ message: 'user added successfully', users: users })
// });

// app.post('/api/users/update/:id', (req, res) => {
//     const { id } = req.params

//     const { name, email, skills, hobbies, age, address } = req.body

//     const findUser = users.find((data) => data.id === id)

//     if (!findUser) {
//         return res.status(404).json({ message: "User not found" })
//     }

//     findUser.name = name !== undefined && name !== null ? name : findUser.name;

//     findUser.name = name !== undefined && name !== null ? name : findUser.name;
//     findUser.email = email !== undefined && email !== null ? email : findUser.email;
//     findUser.age = age !== undefined && age !== null ? age : findUser.age;
//     findUser.skills = skills !== undefined && skills !== null ? skills : findUser.skills;
//     findUser.hobbies = hobbies !== undefined && hobbies !== null ? hobbies : findUser.hobbies;
//     findUser.address = address !== undefined && address !== null ? address : findUser.address;

//     return res.status(200).json({ message: "User edited successfully", findUser })

// })

// app.delete('/api/users/delete/:id', (req, res) => {
//     const { id } = req.params;

//     const initialLength = users.length;
//     users = users.filter(user => user.id !== id);

//     if (users.length === initialLength) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json({ message: "User deleted successfully", users });
// });







/***********////////////////////mongoose (mongo DB)/////////////////////************** */

const mongoose = require('mongoose')

const userModel = require('./user')

mongoose.connect('mongodb://localhost:27017/MongoosePractice')


getUser('68aafb2dba4510b9bc4ca2ae')

async function getUser(id) {
   try {
      // const user = await userModel.findById(id)                //find with the same id
      // const user = await userModel.find({name:new RegExp("yaqoob", 'i')})       //find all user with the same field if exists //regex used for case insensitive 
      // const user = await userModel.findOne({name:'Yaqoob'})    //find the first one with the field
      // const user = await userModel.exists({name:'Yaqoob'})    //return bool if exists
      // const user = await userModel.deleteMany({name:'Yaqoob'}) //delete all with name Yaoob
      
      //query
      // const user =await userModel.where("name").equals('yaqoob')
      const user =await userModel
      .where("age") //field name
      .lt(12) //less than
      .gt(0) //greater than
      .where('name')
      .equals(RegExp("Yaqoob","i"))
      .limit(2) //array limts
      .select('name').select('age') //only fileds

      console.log(user);
   }
   catch (e) {
      console.log(`Error getting user: ${e.message}`)
   }
}

// createUser();
// async function createUser(){
//  try{   const user = await userModel.create({name:'Yaqoob',age:1,email:"TEST@EMAIL.COM",address:{street:'main st',city:'Karachi'}})
//     user.createdAt=5
//     await user.save()
//     console.log(user)}
//  catch(e){
//     console.log(e.message)
//  }
// }
