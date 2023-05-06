// import React, { useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// import { Modal, Form } from "react-bootstrap";
// import axios from "axios";

// export default function UserTable(props) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://localhost:7279/api/user").then((response) => {
//       setUsers(response.data);
//       console.log(response);
//     });
//   }, []);

//   const [full_name, setName] = useState(props.full_name);

//   const [password, setPassword] = useState(props.password);

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       password: password,
//     };

//     axios
//       .put(`https://localhost:7279/api/user/${editingId}`, data)
//       .then((response) => {
//         console.log(response);
//         handleClose();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center">
//       <div className="d-flex justify-content-between align-items-center">
//         <div>
//           <div className="d-flex justify-content-between">
//             <h1>User Table</h1>
//             <button
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 padding: "8px 16px",
//               }}
//             >
//               Add user
//             </button>
//           </div>

//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Date of Birth</th>
//                 <th>Profile Picture</th>
//                 <th>Document</th>
//                 <th>Role</th>
//                 <th>Address</th>
//                 <th>Phone Number</th>
//                 <th>Email Address</th>
//                 <th>Password</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr>
//                   <td>{user.full_name}</td>
//                   <td>{user.date_of_birth}</td>
//                   <td>
//                     <img
//                       src={user.profile_picture}
//                       alt={user.full_name}
//                       style={{ width: "45px", height: "45px" }}
//                       className="rounded-circle"
//                     />
//                   </td>
//                   <td>
//                     <a href={user.document} target="_blank" rel="noreferrer">
//                       View Document
//                     </a>
//                   </td>
//                   <td>{user.role}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone_number}</td>
//                   <td>{user.email_address}</td>
//                   <td>{user.password}</td>
//                   <td>
//                     <Button variant="primary" size="sm" onClick={handleShow}>
//                       Edit
//                     </Button>

//                     <Modal show={show} onHide={handleClose}>
//                       <Modal.Header closeButton>
//                         <Modal.Title>Edit User</Modal.Title>
//                       </Modal.Header>
//                       <Modal.Body>
//                         <Form onSubmit={handleSubmit}>
//                           <input type="hidden" name="id" value={props.id} />
//                           {/* <Form.Group>
//                             <Form.Label>Full Name</Form.Label>
//                             <Form.Control
//                               type="text"
//                               value={full_name}
//                               defaultValue={props.full_name}
//                               onChange={(event) => setName(event.target.value)}
//                             />
//                           </Form.Group> */}

//                           <Form.Group>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control
//                               type="password"
//                               value={password}
//                               onChange={(event) =>
//                                 setPassword(event.target.value)
//                               }
//                               defaultValue={props.password}
//                             />
//                           </Form.Group>
//                         </Form>
//                       </Modal.Body>
//                       <Modal.Footer>
//                         <Button variant="secondary" onClick={handleClose}>
//                           Close
//                         </Button>
//                         <Button variant="primary" onClick={handleClose}>
//                           Save Changes
//                         </Button>
//                       </Modal.Footer>
//                     </Modal>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(user)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import axios from "axios";

export default function UserTable(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7279/api/user").then((response) => {
      setUsers(response.data);
      console.log(response);
    });
  }, []);

  const [password, setPassword] = useState(props.password);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://localhost:7279/api/user/${props.id}`, {
        password: password,
      })
      .then((response) => {
        console.log(response);
        handleClose();
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex justify-content-between">
            <h1>User Table</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Profile Picture</th>
                <th>Document</th>
                <th>Role</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.full_name}</td>
                  <td>{user.date_of_birth}</td>
                  <td>
                    <img
                      src={user.profile_picture}
                      alt={user.full_name}
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                  </td>
                  <td>
                    <a href={user.document} target="_blank" rel="noreferrer">
                      View Document
                    </a>
                  </td>
                  <td>{user.role}</td>
                  <td>{user.address}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.email_address}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleShow(user.id, user.password)}
                    >
                      Edit Password
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                          <input type="hidden" name="id" value={props.id} />

                          <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              defaultValue={props.password}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
