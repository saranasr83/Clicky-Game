import React, { Component } from "react";
import DisneyChar from "./components/DisneyCharCard/DisneyChar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import characters from "./disneyChar.json";
import "./App.css";

//handle the restart button

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    currentScore:0,
    topScore:0,
    imagesAlreadyClicked:[]
  };
  //function to shuffle
// function shuffle(array) {
  
// }

//function to end the game
// function endGame(){

// }

  handleImageClick = id => {
    // shuffle(array)
    var array=this.state.imagesAlreadyClicked
    console.log(array)

    for(var i=0;i<array.length;i++){
      if(id===array[i]){
        console.log("wrong answer")
      } else{
        
      }
    }
    this.setState({
      currentScore:this.state.currentScore+1
    })
    this.state.imagesAlreadyClicked.push(id)
  }

  // Map over this.state.characters and render a DisneyChar component for each character object
  render() {
    return (
      <div>
        <NavBar
        currentScore={this.state.currentScore}
        />
      <Wrapper>
        
        <Title>Clicky Game!</Title>
        <h1>Click on an image to earn points, but don't click on any more than once!</h1>
        <br/>
        {this.state.characters.map((characters,key) => (
          <DisneyChar
            handleImageClick={this.handleImageClick}
            id={characters.id}
            key={key}
            name={characters.name}
            image={characters.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
