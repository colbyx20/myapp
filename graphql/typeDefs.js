const {gql} = require('apollo-server');

// graphql
module.exports = gql`

scalar DateTime

type User{
    id:ID,
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    group: String
}

type Professor{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    privilege: Int,
    fieldOfInterest:String,
    schedule: [DateTime],
    appointments: [String]
}

input UserInput{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    group: String
}

# input for professors 
input ProfessorInput{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    fieldOfInterest:String
}


#Create Professor Schedule
input ProfessorScheduleInput{
    time: DateTime
}

type Query{
    user(ID:ID!):[User!]
    getUsers(amount:Int):[User]
    professor(ID:ID!):Professor!
    getProfessors(amount:Int):[Professor]
}

type Mutation{
    createUser(userInput:UserInput):User!
    createUsers(userInput:[UserInput]):User!

    deleteUser(ID:ID!): User!
    editUser(ID:ID!, userInput:UserInput): Boolean

    createProfessor(professorInput:ProfessorInput):Professor

    deleteProfessor(ID:ID!):Professor!
    editProfessor(ID:ID!, professorInput:ProfessorInput):Boolean
    createProfessorSchedule(ID:ID!,professorScheduleInput:ProfessorScheduleInput):Boolean

    groupStudents()
}
`