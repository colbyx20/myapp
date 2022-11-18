const {gql} = require('apollo-server');

// graphql
module.exports = gql`
type User{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String
}

type Professor{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    privilege: Int,
    fieldOfInterest:String,
    schedule: [User],
    appointments: [User]
}

input UserInput{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String
}

# input for professors 
input ProfessorInput{
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    fieldOfInterest:String,
}

type Query{
    user(ID:ID!):User!
    getUsers(amount:Int):[User]
    professor(ID:ID!):Professor!
    # getProfessors(amount:Int):[Professor]
}

type Mutation{
    createUser(userInput:UserInput):User!
    deleteUser(ID:ID!): User!
    editUser(ID:ID!, userInput:UserInput): Boolean
    createProfessor(professorInput:ProfessorInput):Professor
    # deleteProfessor(ID:ID!):Professor!
    # editProfessor(ID:ID!, professorInput:ProfessorInput):Boolean
}
`