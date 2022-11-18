// holds a resolver
// resolvers are functionalities of code created in typeDefs 
const User = require('../models/user');
const Professor = require('../models/professor');

module.exports={
    Query:{
        async user(_,{ID}){
            return await User.findById(ID); // wait for mongoose for a response that an ID was found
        },
        async getUsers(_,{amount}){
            return await User.find().sort().limit(amount);
        },
        async professor(_,{ID}){
            return await Professor.findById(ID);
        }
        // async getProfessor(_,{amount}){
        //     return await Professor.find().sort().limit(amount);
        // }
    },
    Mutation:{
        async createUser(_,{userInput:{firstname,lastname,email,login,password}}){
            const createdUser = new User({
                firstname:firstname,
                lastname:lastname,
                email:email,
                login:login,
                password:password
            });

            const res = await createdUser.save(); // save to mongoDB database
            // console.log(res._doc);

            return{
                id:res.id,
                ...res._doc // take all properties from result
            }
        },
        async createProfessor(_,{professorInput:{firstname,lastname,email,login,password,fieldOfInterest}}){
            const createdProfessor = new Professor({
                firstname:firstname,
                lastname:lastname,
                email:email,
                login:login,
                password:password,
                fieldOfInterest:fieldOfInterest
            });
            const res = await createdProfessor.save(); // save to mongoDB database

            return{
                id:res.id,
                ...res._doc
            }

        },
        // deleteUser(ID:ID!): User!
        async deleteUser(_,{ID}){
            const wasDeleted = (await User.deleteOne({_id:ID})).deletedCount;
            return wasDeleted;
        },
        // async deleteProfessor(_,{ID}){
        //     const wasDeleted = (await Professor.deleteOne({_id:ID})).deletedCount;
        //     return wasDeleted;
        // },
        // editUser(ID:ID!, userInput:UserInput): Boolean
        async editUser(_,{ID,userInput:{firstname,lastname,email,login,password}}){
            const wasEdited = (await User.updateOne({_id:ID}, {
                firstname:firstname,
                lastname:lastname
            })).modifiedCount;
            return wasEdited; // 1 if something was edited, or 0 if nothing was edited
        }
        // async editProfessor(_,{ID,professorInput:{firstname,lastname,email,login,password,fieldOfInterest}}){
        //     const wasEdited = (await Professor.updateOne({_id:ID},{
        //         firstname:firstname,
        //         lastname:lastname,
        //         email:email,
        //         login:login,
        //         password:password,
        //         fieldOfInterest:fieldOfInterest
        //     })).modifiedCount;
        //     return wasEdited;
        // }
    }
}