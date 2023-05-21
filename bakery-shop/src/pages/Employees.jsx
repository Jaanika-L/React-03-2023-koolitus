import { Button, Table } from "react-bootstrap";
import config from "../Data/config.json"
import { useEffect, useRef, useState } from "react";

function Employees() {
  const idRef= useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const avatarRef = useRef()

  const [users, setUsers] = useState(config)
  
const addEmployee = () => {
  const newEmployee = {
    id: Number(idRef.current.value),
    email: emailRef.current.value,
    first_name:firstNameRef.current.value,
    last_name:lastNameRef.current.value,
    avatar: avatarRef.current.value
  }
  users.push(newEmployee);
  setUsers(users.slice());

}
//  const usersRef = useRef();

//   useEffect(() => {
//     fetch(config.usersUrl)
//     .then(res=> res.json())
//     .then(json => setUsers(json || []))
//   }, []);

//   // TODO: Load data from backend service

  const addEmployee = () => {
    users.push({"first_name" : usersRef.current.value})
    setUsers(users.slice())
    fetch(config.usersUrl,
      {"method": "PUT", "body":   JSON.stringify(users)}
      )
    // TODO: Add validations
    // TODO: Add an employee to the table
  }

  const deleteEmployee = (index) => {
    users.splice(index, 1);
    setUsers(users.slice());
    fetch(config.usersUrl,
      {"method": "PUT", "body":JSON.stringify(users)}
      )
    // TODO: Delete an employee from the table
  }

  return (
  
  <div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
              <td>{user.avatar}</td>
              <td><button onClick={()=>deleteEmployee(index)} >Delete</button> </td>

            </tr>
          )
          
          
          )}
        {/* <tr>
          <td>123</td>
          <td>Added name 1</td>
          <td>email@email.com</td>
          <td>Avatar</td>
          <td><Button onClick={deleteEmployee} type="button" variant="danger">Delete</Button></td>
        </tr>
        <tr>
          <td>124</td>
          <td>Added name 2</td>
          <td>email2@email.com</td>
          <td>Avatar</td>
          <td><Button onClick={deleteEmployee} type="button" variant="danger">Delete</Button></td>
        </tr> */}

        <tr className="input-row">
          <td><input type="text" placeholder="ID" className="form-control"/></td>
          <td><input type="text" placeholder="Name" className="form-control"/></td>
          <td><input type="text" placeholder="Email" className="form-control"/></td>
          <td> <input type="url"  placeholder="Avatar" className="form-control"/> </td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;