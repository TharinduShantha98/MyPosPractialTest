import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { ValidatorForm } from 'react-form-validator-core';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



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
    root_form:{

        display:"flex",
        width:"100%",
        height:"70%",
     //   backgroundColor:"#264c1e",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",



    },
    root_form_main:{
        display:"flex",
        width:"50%",
        height:"90%",
     //   backgroundColor:"#1b2b18",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid black"

    },
    root_footer:{
        display:"flex",
        width:"100%",
        height:"20%",
      //  backgroundColor:"#6acd55",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    }





}))






export  default  function Product(){


    const classes = useStyles();






    return(

        <form>
            <div className={classes.root}>
                <div className={classes.root_header}>
                    <Typography variant="h4" gutterBottom style={{fontWeight:"bold"}} >
                        Product
                    </Typography>
                </div>


                <div className={classes.root_form}>

                    <div className={classes.root_form_main}>

                        <div style={{
                            display:"flex",
                            width:"75%",
                            height:"100%",
                        //    backgroundColor:"#a6ce9f",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                            <div style={{ display:"flex",
                                width:"70%",
                                height:"15%",
                            //    backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"center",
                                justifyContent:"center",}}>

                                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                    product ID
                                </Typography>



                            </div>
                            <div style={{ display:"flex",
                                width:"70%",
                                height:"15%",
                            //    backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"center",
                                justifyContent:"center",}}>

                                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                    ProductName
                                </Typography>
                            </div>
                            <div style={{ display:"flex",
                                width:"70%",
                                height:"15%",
                             //   backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"center",
                                justifyContent:"center",}}>
                                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                   Price
                                </Typography>

                            </div>
                            <div style={{ display:"flex",
                                width:"70%",
                                height:"15%",
                        //        backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"center",
                                justifyContent:"center",}}>

                                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                    Qty
                                </Typography>
                            </div>




                        </div>


                        <div style={{
                            display:"flex",
                            width:"75%",
                            height:"100%",
                     //       backgroundColor:"#1c2b19",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",
                        }}>

                            <div style={{ display:"flex",
                                width:"90%",
                                height:"15%",
                        //        backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"start",
                                justifyContent:"start",}}>

                                <TextField id="outlined-basic" label="product Id" variant="outlined" size={"small"} fullWidth />


                            </div>
                            <div style={{ display:"flex",
                                width:"90%",
                                height:"15%",
                        //        backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"start",
                                justifyContent:"start",}}>
                                <TextField id="outlined-basic" label="product Name" variant="outlined" size={"small"} fullWidth />

                            </div>
                            <div style={{ display:"flex",
                                width:"90%",
                                height:"15%",
                         //       backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"start",
                                justifyContent:"start",}}>
                                <TextField id="outlined-basic" label="Price" variant="outlined" size={"small"} fullWidth />

                            </div>
                            <div style={{ display:"flex",
                                width:"90%",
                                height:"15%",
                      //          backgroundColor:"#1d3918",
                                flexDirection:'column',
                                alignItems:"start",
                                justifyContent:"start",}}>
                                <TextField id="outlined-basic" label="Qty" variant="outlined" size={"small"} fullWidth  />


                            </div>



                        </div>
                    </div>

                </div>


                <div className={classes.root_footer}>
                    <div  style={{ display:"flex",
                        width:"20%",
                        height:"45%",
                  //      backgroundColor:"#1d3918",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",}} >

                        <Button variant="contained" color="primary" style={{width:"50%"}}>
                            save
                        </Button>

                    </div>



                    <div  style={{ display:"flex",
                        width:"20%",
                        height:"45%",
                  //      backgroundColor:"#1d3918",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",}}>


                        <Button variant="contained" color="primary" style={{width:"50%"}}>
                           Update
                        </Button>


                    </div>

                    <div  style={{ display:"flex",
                        width:"20%",
                        height:"45%",
                 //       backgroundColor:"#1d3918",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",}}>

                        <Button variant="contained" color="primary" style={{width:"50%"}}>
                           clear
                        </Button>

                    </div>

                </div>



            </div>










        </form>






    )






}
