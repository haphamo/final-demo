import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Link, useParams } from 'react-router-dom';

const petData = {
  petId: '1',
  petName: 'Labber',
  img: 'https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg',
  info: "I'm a 5 month Labbie and I like to make friends."
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    'justify-content': 'center',
    'flex-direction': 'column',
    'align-items': 'center'
  },
  bigAvatar: {
    width: 170,
    height: 170,
  },
}));

export default function PetOnUserPage(prop) {
  // I couldn't figure out how to use the id in the url
  let { id } = useParams()
  const petId = petData.petId
  const classes = useStyles();
  
    return (
      <Fragment>
      <div key={petData.petId} className={classes.root} >
      <Link to='pets/1' ><Avatar alt={petData.petName} src={petData.img} className={classes.bigAvatar} /></Link>
        <em>{petData.petName}</em>
      </div>
      </Fragment>
    );

}