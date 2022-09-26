
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const useStyles  =  makeStyles((theme) =>({


    root:{
        display:"flex",
        width:"100vw",
        height:"100vh",
        //    backgroundColor:"#231f1f",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center"

    },

    root_header:{
        display:"flex",
        width:"100%",
        height:"10%",
        backgroundColor:"#8d5f5f",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",



    },






}))

export  default  function Report(){


    const classes = useStyles();



    return(
        <div className={classes.root}>
            <div className={classes.root_header}>
                <Typography variant="h4" gutterBottom style={{fontWeight:"bold"}} >
                   Report
                </Typography>
            </div>

        </div>



        )





}
