import {FaTrash} from 'react-icons/fa';
export default function UserRow({users}) {
  return (
    <tr>
        <td>{users.id}</td>
        <td>{users.firstname}</td>
        <td>{users.lastname}</td>
        <td>{users.group}</td>
        <td>{users.email}</td>
        <td>{users.login}</td>
        <td>{users.password}</td>
        <td>
          <button className="btn btn-danger btn-sm">
            <Farash/>
          </button>
        </td>
    </tr>
  )
}
