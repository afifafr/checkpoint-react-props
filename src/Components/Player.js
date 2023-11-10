//importaion
import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl, imageUrl1,imageUrl2 }) => {
  
  return (
    <div >
      {/* Composant Card de react-bootstrap */}
      <Card style={{ width: '16rem' }}>
        {/* Carrousel d'images */}
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={imageUrl} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageUrl1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageUrl2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          {/* Titre du joueur */}
          <Card.Title className="title">{name}</Card.Title>
          {/* Détails du joueur */}
          <Card.Text>
            Team: {team}<br />
            Nationality: {nationality}<br />
            Jersey Number: {jerseyNumber}<br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
// Define default props for each attribute
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  imageUrl: "",
  imageUrl1: ""
};
export default Player;