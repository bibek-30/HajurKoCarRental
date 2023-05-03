import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";

export default function UserTable(props) {
  const demoData = [
    {
      full_name: "Osin",
      date_of_birth: "01/01/1990",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Admin",
      address: " gaisar",
      phone_number: "98701hb2345",
      email_address: "osin@gmail.com",
      password: "********",
    },
    {
      full_name: "Bibek",
      date_of_birth: "01/01/1990",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/8.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Staff",
      address: "Itahari gaisar",
      phone_number: "987012345",
      email_address: "bibek@gmail.com",
      password: "********",
    },
    {
      full_name: "Ang Ming",
      date_of_birth: "03/15/1985",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/6.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Customer",
      address: "Dharan",
      phone_number: "98043123456",
      email_address: "Ang@gmail.com",
      password: "********",
    },
    {
      full_name: "Ateeth",
      date_of_birth: "06/30/1975",
      profile_picture: "https://mdbootstrap.com/img/new/avatars/7.jpg",
      document: "https://mdbootstrap.com/img/new/sample-doc.pdf",
      role: "Customer",
      address: "Itahari",
      phone_number: "987654321",
      email_address: "ateeth@gmail.com",
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
