import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Prasoon Shakya and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com"> Link</a> </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/wynisco/pen/ExWmXzd"> Link</a> </td>
        </tr>
        
        <tr>
          <th scope="row">3</th>
          <td>Homework 2.2</td>
          <td>Wynisco Clone </td>
          <td><a href="https://shakya-prasoon.github.io/Clone-WyniscoWebsite/"> Link</a> </td>
        </tr>
        
        <tr>
          <th scope="row">4</th>
          <td>Homework 3.2</td>
          <td>Navigation</td>
          <td><a href="https://codepen.io/pshakya/pen/dyWVoQK"> Link</a> </td>
        </tr>
                       
        <tr>
          <th scope="row">5</th>
          <td>Homework 4.1</td>
          <td>Comcast</td>
          <td><a href="https://codepen.io/pshakya/pen/bGWoqGR"> Link</a> </td>
        </tr>
                       
        <tr>
          <th scope="row">6</th>
          <td>Homework 5.1</td>
          <td>Theme Toggle</td>
          <td><a href="https://codepen.io/pshakya/pen/yLboOEa"> Link</a> </td>
        </tr>
                       
        <tr>
          <th scope="row">7</th>
          <td>Homework 5.2</td>
          <td>Frontier</td>
          <td><a href="https://codepen.io/pshakya/pen/yLbpKXY"> Link</a> </td>
        </tr>
                       
        <tr>
          <th scope="row">8</th>
          <td>Homework 8.1</td>
          <td>ACME (teleport)</td>
          <td><a href="https://shakya-prasoon.github.io/acme_co/"> Link</a> </td>
        </tr>
                       
        <tr>
          <th scope="row">9</th>
          <td>Homework 10.2</td>
          <td>Lottery</td>
          <td><a href="https://codepen.io/pshakya/pen/oNWMwmb?editors=1111"> Link</a> </td>
        </tr>
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
