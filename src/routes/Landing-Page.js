import React, { Component } from 'react';
import AppContext from '../context/context';
import UsersService from '../services/user-service';


class LandingPage extends Component {
  static contextType = AppContext;

  //user 
  // if using with an event listener use an arrow function - needs to bind and arrow auto binds it 
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.context.clearError());
    this.context.clearError();
    this.context.clearUserName();
    let name = document.getElementById('name').value;
    this.context.setUserName(name);

    console.log(name);

    return UsersService.postUser(name)
      .then(results => {

        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/adopt';
        history.push(destination);

      });
  }

  // check api calls & check in postman &  then check data flows 

  render() {

    return (
      <main className='landing-fullpage'>
        <div className='landing-page'>
          <h1> Adoption Landing Page information </h1>
          <img src='https://live.staticflickr.com/65535/50707103271_c9d1f629fc_w.jpg' alt='dog-cat-under-blanket'></img>
          {/* <Link to='/adopt'>
            <button> Start Adoption Process  </button>
          </Link> */}
          <form className='get-started' onSubmit={this.handleSubmit}>
            <h3>adopt today</h3>
            <label htmlFor='name'> Name</label>
            <input type='text' name='name' id='name' required />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </main>
    );

  }


}
export default LandingPage;