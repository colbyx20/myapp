
import {gql} from '@apollo/client';


export const GET_USERS = gql`
    query Query($amount: Int) {
    getUsers(amount: $amount) {
        firstname
        lastname
        group
        email
        id
        login
        password
    }
}
`
