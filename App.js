import React, { Component } from 'react'
import {Direction}  from './Direction/Direction'
import Main from './Main/Main'
import moduleName from './App.css'
import {MainContent} from './Content/MainContent'
import { Content1 } from './Content/Content1'
import { Content2 } from './Content/Content2'
import { Content3 } from './Content/Content3'
import { About } from './Content/About'
import { Home }  from './Content/Home'
import { Contact } from './Content/Contact' 


class App extends Component{
  constructor(){
    super()

    this.state = {
      SelectedSection: "",
      Title : "",
      SubTitle : "",
      ImageSrc : "",
      CardText : "",
      Details : "",
      Content1 : null,
      Content2 : null,
      Content3 : null,
      About : null,
      Home : null,
      Contact : null
    };

    

  }

  componentDidMount(){
    this.setState({
      SelectedSection : "MainContent",
      Title : MainContent.cardTitle,
      SubTitle : MainContent.cardSubTitle,
      ImageSrc : MainContent.imageScr,
      Details : MainContent.details,
      Content1,
      Content2,
      Content3,
      About,
      About ,
      Home  ,
      Contact
    })
  }

  handleClick =(name)=>{
    this.setState({
      SelectedSection : name,
      Title : this.state[name].cardTitle,
      SubTitle : this.state[name].cardSubTitle,
      ImageSrc : this.state[name].imageScr,
      Details : this.state[name].details
    })
  }

  render(){
    return(
      <div className="body">
        <Direction handleClick={this.handleClick}/>
        <Main 
          MainContent={this.state.MainContent}
          SelectedSection={this.state.SelectedSection}
          Title={this.state.Title}
          SubTitle={this.state.SubTitle}
          ImageSrc={this.state.ImageSrc}
          Details={this.state.Details}
          handleClick={this.handleClick}
        />
      </div>
    )
  }

}

export default App
