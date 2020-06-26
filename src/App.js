import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import { Jumbotron, Container } from 'reactstrap';
import bgimage from './assets/nature-sky-night-milky-way-127577.jpg'

function App() {
  return (
    <div className="App">
      <Jumbotron fluid style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}} >
        <Container fluid>
          <p className='App-logo'>NASA Photo of the Day</p>
        </Container>
      </Jumbotron>
      <PhotoList />
    </div>
  );
}

export default App;
