import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
  .then(result => {
    const createdUser = result.user;
    console.log(createdUser);
  })
  .catch(error =>{
    console.log(error.message);
  })
  }

  const handleAccepted = (event) =>{
    setAccepted(event.target.checked);
  }



    return (
        <Container className='mx-auto w-25'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Your Name" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail2">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword4">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check
    onClick={handleAccepted}
    type="checkbox"
     name='accept'
      label= { <>Accept <Link to='/terms'> Terms and Condition</Link></>} />
  </Form.Group>

  

  <Button disabled={!accepted} variant="primary" type="submit">
    Register
  </Button> <br />


  <Form.Text className="text-secondary"> Already have an account? 
  <Link to='/login' className='text-danger'>Login</Link>
    </Form.Text> <br />

  <Form.Text className="text-success">
      We'll never share your email with anyone else.
    </Form.Text> <br />

  <Form.Text className="text-danger">
      We'll never share your email with anyone else.
    </Form.Text>

</Form>
    </Container>
    );
};

export default Register;