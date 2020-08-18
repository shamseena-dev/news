import React,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import { fade, makeStyles } from '@material-ui/core/styles';


import "./navbar.scss";




import {LanguageContext} from '../../contexts/LanguageContext';


     
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
   button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function Navbar(){ 
const [language,setLanguage] = useContext(LanguageContext);
  const classes = useStyles();

 
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  
  return (
    <div className="nav-bar">
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {/*
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>  */}
          <Typography className={classes.title} variant="h4" noWrap>
           D'Local News
          </Typography>
         

         <select name="cars" id="cars" value={language}
          onChange={handleChange}>
    <option value="en">English</option>
    <option value="de">German</option>
    <option value="cs">Czech</option>
    <option value="fr">French</option>
     <option value="da">Danish</option>
    <option value="nl">Dutch</option>
   
  </select> 



 


 
    
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}

export default Navbar;
