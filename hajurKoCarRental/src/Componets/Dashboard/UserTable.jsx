import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

export default function UserTable(props) {
  const demoData = [
    {
      full_name: "John Doe",
      date_of_birth: "01/01/1990",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Software engineer",
      address: "123 Main St, Anytown USA",
      phone_number: "555-555-5555",
      email_address: "john.doe@gmail.com",
      password: "********",
    },
    {
      full_name: "Jane Smith",
      date_of_birth: "03/15/1985",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/6.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Consultant",
      address: "456 Oak St, Anytown USA",
      phone_number: "555-555-5555",
      email_address: "jane.smith@gmail.com",
      password: "********",
    },
    {
      full_name: "Bob Johnson",
      date_of_birth: "06/30/1975",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/7.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Designer",
      address: "789 Pine St, Anytown USA",
      phone_number: "555-555-5555",
      email_address: "bob.johnson@gmail.com",
      password: "********",
    },
  ];
  const [full_name, setName] = useState(props.full_name);
  const [date_of_birth, setdate_of_birth] = useState(props.date_of_birth);
  const [role, setRole] = useState(props.role);
  const [phone_number, setPhoneNumber] = useState(props.phone_number);
  const [password, setPassword] = useState(props.password);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex justify-content-between">
            <h1>User Table</h1>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "8px 16px",
              }}
            >
              Add user
            </button>
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
              {demoData.map((user) => (
                <tr>
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
                  <td>{user.password}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={handleShow}>
                      Edit
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                          <input type="hidden" name="id" value={props.id} />
                          <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              value={full_name}
                              defaultValue={props.full_name}
                              onChange={(event) => setName(event.target.value)}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                              type="date"
                              value={date_of_birth}
                              onChange={(event) =>
                                setdate_of_birth(event.target.value)
                              }
                              defaultValue={props.date_of_birth}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                              type="text"
                              value={role}
                              onChange={(event) => setRole(event.target.value)}
                              defaultValue={props.role}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="text"
                              value={phone_number}
                              onChange={(event) =>
                                setPhoneNumber(event.target.value)
                              }
                              defaultValue={props.phone_number}
                            />
                          </Form.Group>

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
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(user)}
                    >
                      Delete
                    </Button>
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
