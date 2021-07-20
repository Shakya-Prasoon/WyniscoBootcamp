import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : shakya95pras@gmail.com my email </p>
          <p className="lead">I'm in West Coast so the time zone is PST.</p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
