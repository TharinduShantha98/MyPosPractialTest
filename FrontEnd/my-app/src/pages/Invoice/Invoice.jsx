import React from "react";
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";



const useStyles  =  makeStyles((theme) =>({


        root:{
            display:"flex",
            width:"100vw",
            height:"100vh",
            backgroundColor:"#231f1f",
            flexDirection:'column',
            alignItems:"center",
            justifyContent:"center"

        },
    root_header:{
        display:"flex",
        width:"100%",
        height:"10%",
        backgroundColor:"#c45656",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",



    },
    root_partOne:{
        display:"flex",
        width:"100%",
        height:"20%",
        backgroundColor:"#a55e5e",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",

    },
    root_partOne_div1:{
        display:"flex",
        width:"50%",
        height:"100%",
        backgroundColor:"#e29c9c",
        flexDirection:'row',
        alignItems:"left",
        justifyContent:"left",

    },
    root_partOne_div2:{
        display:"flex",
        width:"50%",
        height:"100%",
        backgroundColor:"#ea6262",
        flexDirection:'row',
        alignItems:"left",
        justifyContent:"left",

    },
    root_partOne_div2_div1:{
        display:"flex",
        width:"100%",
        height:"50%",
        backgroundColor:"#7f1c1c",
        flexDirection:'row',
        alignItems:"bottom",
        justifyContent:"bottom",

    }












}))





export  default  function Invoice(){
    const classes = useStyles();

    return(
        <div className={classes.root}>

            <div className={classes.root_header}>
                <Typography variant="h5" gutterBottom >
                    Invoice
                </Typography>

            </div>


            <div className={classes.root_partOne}>



                <div className={classes.root_partOne_div1}>
                    <div style={{
                        display:"flex",
                        width:"50%",
                        height:"100%",
                        backgroundColor:"#eaadad",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",
                    }} >
                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                            backgroundColor:"#7f4141",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>

                            <Typography variant="h6" gutterBottom >
                                Date
                            </Typography>
                        </div>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                            backgroundColor:"#391818",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>
                            <Typography variant="h6" gutterBottom >
                                Invoice Id
                            </Typography>

                        </div>

                    </div>

                    <div style={{
                        display:"flex",
                        width:"50%",
                        height:"100%",
                        backgroundColor:"#cb3a3a",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",

                    }}>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                            backgroundColor:"#7f4141",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>

                            <Typography variant="h6" gutterBottom >
                                2014-12-11
                            </Typography>
                        </div>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                            backgroundColor:"#391818",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>
                            <Typography variant="h6" gutterBottom >
                                10
                            </Typography>

                        </div>


                    </div>


                </div>

                <div className={classes.root_partOne_div2}>

                    <div className={classes.root_partOne_div2_div1}>
                        <div style={{
                                width:"50%",
                                height:"100%",
                                backgroundColor:"#e8d4d4",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",

                        }}>
                                <Typography variant="h6" gutterBottom >
                                    customer
                                </Typography>

                            </div>

                        <div style={{
                            width:"50%",
                            height:"100%",
                            backgroundColor:"#ea6565",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                            <TextField id="standard-basic" label="Customer Name" />

                        </div>


                    </div>


                    <div>


                    </div>



                </div>

            </div>








        </div>


    );







}
