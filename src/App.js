import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.scss';
import BottonNav from './components/BottomNav';
import { Widget } from "@uploadcare/react-widget";
import PetInfo from './components/PetInfo';
import PetProfilePhoto from './components/PetProfilePhoto';
import PetFav from './components/PetFav';
import PetForm from './components/Form';

export default function App() {
 
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <DogsNearby />
          </Route>
          <Route path="/profile">
            <Profile />
            

          </Route>
          <Route path="/friends">
            <Friends />
            <PetForm />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/pets/:id">
            {/* <PetComponent /> */}
          </Route>
        </Switch>
      </div>
      <BottonNav />
    </Router>
  );
}

// const PetComponent = props => {
//   let { id } = useParams()

//   console.log("This was the id", id)
//   useEffect(() => {
//     //axios.get(`/api/pets/${id}`)
//   }, [id])
//   return null
// }

// You can think of these components as "pages"
// in your app.

function DogsNearby() {
  return (
    <div>
      <h2 class="header">DogsNearby</h2>
      <hr></hr>
    </div>
  );
}

//Must be a nested route in profile to get to pet profile
function Profile() {
  // const styles = {
  //   display: "flex",
  //   "justify-content": "center"
  // }
  return (
    <div>
      <div class="my-profile-header">
      <h2 class="my-profile-text">My Profile</h2>
      {/* <label htmlFor='file'>Your file:</label>{' '} */}
      <div class="upload">
      <Widget 
        publicKey='e409ed1db8c88f8b8083' 
        previewStep='true'
        crop='true'
        />
      </div>
      </div>
      <hr></hr>
      <div class="pet-profile-div" >
      <PetProfilePhoto />
      </div>
      <PetInfo />
      <PetFav />
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h2 class="header">Notifications</h2>
      <hr></hr>
    </div>
  );
}

function Friends() {
  return (
    <div class="header">
      <h2>Friends</h2>
      <hr></hr>
    </div>
  );
}
