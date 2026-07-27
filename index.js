import { Router } from 'express'
import { DatabaseConnect } from './DB/db_connect.js'
import { Student } from './DB/schema.js'
import { Routine } from './DB/schema.js'



import { app } from './app.js'
const port = 4000
const host = "192.168.29.159"

DatabaseConnect()


async function rutin() {
  const res = await Routine.create({
    sem: 7,
    stream: [
      {
        streamName: "EE",
        routine: [
          {
            days: "Monday",
            slots: [
              {
                startTime: "12Pm",
                endTime: '2pm',
                room_no: 401,
                subject_code: 'bsc301',
                subject_name: 'maths',
                teacher_name: 'Bakshi'
              }
            ]
          },
          {
            days: "Tues",
            slots: [
              {
                startTime: "12Pm",
                endTime: '2pm',
                room_no: 401,
                subject_code: 'bsc301',
                subject_name: 'maths',
                teacher_name: 'Bakshi'
              }
            ]
          }
        ]
      },
      {
        streamName: "CSE",
        routine: [
          {
            days: "Monday",
            slots: [
              {
                startTime: "12Pm",
                endTime: '2pm',
                room_no: 401,
                subject_code: 'bsc301',
                subject_name: 'maths',
                teacher_name: 'Bakshi'
              }
            ]
          },
          {
            days: "Tues",
            slots: [
              {
                startTime: "12Pm",
                endTime: '2pm',
                room_no: 401,
                subject_code: 'bsc301',
                subject_name: 'maths',
                teacher_name: 'Bakshi'
              }
            ]
          }
        ]
      }


    ]


  })
  console.log(res, res.slots);

}

app.post('/login',async(req,res)=>{
  const {email,password} = req.body
  const user = await Student.findOne({email})
  if (!user) {
    res.status(404).json({message:"User not found"})
  }
  const pass = user.password
  if (password!=pass) {
        res.status(404).json({message:"Wrong Password"})
  }
  else{  res.json({token:'10600124038'})
}

  console.log(email,password)
})

app.get('/routine', async (req, res) => {

})

app.post('/studentData',async(req,res)=>{
  try {
    const {token} = req.body
    const info = await Student.findOne({roll:token})
    console.log(info);
    await res.send(info)
    
  } catch (error) {
    
  }
})


app.post('/', async (req, res) => {
  try {
    const {token} = req.body
    if (token==10600124038) {
          res.json({value:"true"})
    } else {
      
    }
    console.log(token);
    
  } catch (error) {
    console.log(error);

  }

})

app.listen(port,host, () => {
  console.log(`Listening on port http://${host}:${port}`)
})