import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    'flex-direction': 'column'
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

const avatarStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    'flex-direction': 'column',
    'align-items': 'center'
  },
  bigAvatar: {
    width: 170,
    height: 170,
    'border-style': 'solid',
    'border-color': 'coral'
  },
}));

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

// Add a new pet
// Only the owner that is logged in can add a new pet on their profile
export default function AddPet(props) {
  const classes = useStyles()
  const avatarClasses = avatarStyles()

  const currentUser = props.userId
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [breed, setBreed] = useState('')
  const [quirkyFact, setQuirkyFact] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')

  const onSubmit = function (evt) {
    evt.preventDefault();
    //validations here
    addNewPet();
  }
  const handleNameChange = function(e) {
    setName(e.target.value)
  }
  const handleAgeChange = function(e) {
    setAge(parseInt(e.target.value))
  }
  const handleBreedChange = function(e) {
    setBreed(e.target.value)
  }
  const handleQuirkyFactChange = function(e) {
    setQuirkyFact(e.target.value)
  }
  const handleProfilePhotoChange = function(e) {
    setProfilePhoto(e.target.value)
  }
  
  
  const addNewPet = function() {
    axios.post('api/pets', { name, age, breed, quirkyFact, currentUser, profilePhoto })

    .then(res => {
      console.log("Added a new  pet: ", res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Fragment>
      <h3>Add a new pet</h3>
      <em>All fields are required.</em>
        <div className={avatarClasses.root}></div>
        <div className={classes.container}> 
          <form style={ formStyle } onSubmit={onSubmit}>
            <TextField
              required
              id="name"
              label="Name"
              className={classes.textField}
              margin="normal"
              onChange={handleNameChange}
              value={name}
            />
            <TextField
              required
              id="age"
              label="Age"
              className={classes.textField}
              margin="normal"
              onChange={handleAgeChange}
              value={age}
            />
            <TextField
              required
              id="breed"
              label="Breed"
              className={classes.textField}
              margin="normal"
              onChange={handleBreedChange}
              value={breed}
            />
            <TextField
              required
              id="quirkyfact"
              label="Quirky Fact"
              className={classes.textField}
              margin="normal"
              onChange={handleQuirkyFactChange}
              value={quirkyFact}
            />
            <TextField
              required
              id="profilephoto"
              label="Profile Photo"
              className={classes.textField}
              margin="normal"
              onChange={handleProfilePhotoChange}
              value={profilePhoto}
            />
          </form>
            <Button variant="outlined" className={classes.button} onClick={() => props.setShowForm(false)}>
              Cancel
            </Button>
            <Button variant="outlined" className={classes.button}>
              Submit
            </Button> 
      </div>
    </Fragment>
  );
}