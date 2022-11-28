import {gql, useQuery} from '@apollo/client';
import UserRow from './UserRow';
const GET_USERS = gql`

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

export default function Users() {

  const {loading,error,data} = useQuery(GET_USERS)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something Went Wrong</p>


  return (
  <>
    {!loading && !error && (
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>_ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Group</th>
            <th>Email</th>
            <th>Login</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {data.getUsers.map(users =>(
            <UserRow key={users.id} users={users}></UserRow>
          ))}
        </tbody>
      </table>
    )}
  </>
  )
}
