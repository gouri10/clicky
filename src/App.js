import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import breeds from "./dogBreeds.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Col, Row, Container } from "./components/Grid";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    breeds,
    score: 0,
    topscore: 15
  };

  changeClickStatus = id => {
    if (this.state.score !== this.state.topscore) {
      const breedClicked = this.state.breeds.filter(dog => dog.id === id)[0];

      if (breedClicked.clicked !== true) {
        breedClicked.clicked = true;
        this.setState({ score: this.state.score + 1 });
      }
      else {
        alert("You lost the game");
        this.setState({ score: 0 });
        this.reset();
      }
      // Set this.state.friends equal to the new friends array
      this.setState({ breeds });
      this.shuffle(this.state.breeds);
    }
    else {
      alert("You won the game");
      this.setState({ score: 0 });
      this.setState({ topscore: 0 });
      this.reset();
    }
  };

  reset = () => {
    this.state.breeds.map(x => x.clicked = false);
    this.setState({ breeds });   
  };

  shuffle = (breeds) => {
    for (let i = breeds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [breeds[i], breeds[j]] = [breeds[j], breeds[i]];
    }
    this.setState({ breeds });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Header imageType="Choose Your Breed" />
        <NavBar score={this.state.score} topscore={this.state.topscore} />
        <Wrapper>
          {this.state.breeds.map(breed => (
            <ImageCard
              changeClickStatus={this.changeClickStatus}
              id={breed.id}
              name={breed.name}
              image={breed.image}
            />
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
