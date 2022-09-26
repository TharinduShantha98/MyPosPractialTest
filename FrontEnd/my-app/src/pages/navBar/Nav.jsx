import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {colors} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    linkStyle:{
        textDecoration:'none',

    }
}));



export  default function Navbar() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AppBar position="static" style={{width:"100%"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                            MYPOS
                    </Typography>

                    <Link  className={classes.linkStyle} to={"/invoice"}>
                        <Button style={{color:"#f1eeee"}}>INVOICE</Button>
                    </Link>

                    <Link   className={classes.linkStyle} to={"product"}>
                        <Button style={{color:"#f1eeee"}}>PRODUCT</Button>
                    </Link>

                    <Link   className={classes.linkStyle} to={"report"}>
                        <Button style={{color:"#f1eeee"}}>REPORT</Button>
                    </Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>


    );
}


