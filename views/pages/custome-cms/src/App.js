import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Form, Text } from 'react-form';

class UploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      composer: '',
      genre: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}

handleChange (evt) {
  // check it out: we get the evt.target.name (which will be either "email" or "password")
  // and use it to target the key on our `state` object with the same name, using bracket syntax
  this.setState({ [evt.target.name]: evt.target.value });
}

handleSubmit(event) {
 const data = {
   name:this.state.name,
   composer:this.state.composer,
   genre:this.state.genre,
   image:this.state.image
 }

 axios.get('/tabsLibrary')
 .then(function (response) {
   console.log(response);
 })
 .catch(function (error) {
   console.log(error);
 });

}

  render() {
    return(
     <div className="container">
      <h2>Upload Images to the database</h2>
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
      <label>Name:</label>
      <input name="name" onChange={this.handleChange} type="text" className="form-control" id="usr"></input>

      <label>Composer:</label>
      <input name="composer" onChange={this.handleChange} type="text" className="form-control" id="usr"></input>

      <label>genre:</label>
      <input  name="genre" onChange={this.handleChange} type="text" className="form-control" id="usr"></input>

      <br />
      <label>add the image URL:</label>
      <input  name="image" onChange={this.handleChange} type="text" className="form-control" id="usr"></input>

      <br />
      <button type="submit"  className="btn btn-success">Upload</button>
    </div>
  </form>
</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <UploadForm />
      </div>
    );
  }
}

export default App;
