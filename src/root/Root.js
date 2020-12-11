import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../landingpage/Landing-Page';
import Pets from '../pets/Pets';
import People from '../people/People';
import Adopt from '../adopt/Adopt';
import Cats from '../cat/Cats';





function Root() {
  return <div>
    <BrowserRouter>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/cats' component={Cats} />
      <Route exact path='/people' component={People} />
      <Route exact path='/adopt' component={Adopt} />
    </BrowserRouter>
  </div>;
}

export default Root;
