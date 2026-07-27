import mongoose from "mongoose";

//Student login ingo

const sutudent = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
        required: true,

    },
    imageUri: {
        type: String
    },
    roll: {
        type: String,
        required: true,
        unique: true,


    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true,


    }
})



const Student = mongoose.model('Student', sutudent)

//routine 

const routine = new mongoose.Schema({
    sem: {
        type: Number,
        required: true
        // unique: true,
    },
    stream: [
        {
            streamName: {
                type: String
            },
            routine: [
                {
                    days: {
                        type: String,
                        required: true,
                        // unique: true
                    },
                    slots: [
                        {
                            startTime: {
                                type: String,
                            },
                            endTime: {
                                type: String,
                            },
                            room_no: {
                                type: String,
                            },
                            subject_code: {
                                type: String,
                            },
                            subject_name: {
                                type: String,
                            },
                            teacher_name: {
                                type: String,
                            },
                        },
                    ]
                }

            ]

        }
    ]


})
const Routine = mongoose.model('Routine', routine)

//attendance

const attendance = new mongoose.Schema({
    sem: {
        type: Number,
        required: true,
        unique: true,
    },
    attendance: [
        {
            roll: {
                type: String
            },
            totalAttendance: {
                type: Number
            },
            weeklyAttendance: {
                type: Number
            }
        }
    ]
})

const Attendance = mongoose.model("Attendance", attendance)


export { Student }
export { Routine } 
