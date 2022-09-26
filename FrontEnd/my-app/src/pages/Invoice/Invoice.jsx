import React from "react";
import {makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(name, calories, fat, carbs, ) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('rice', 'nadu rice', 15, 3000, ),


];





const useStyles  =  makeStyles((theme) =>({


        root:{
            display:"flex",
            width:"100vw",
            height:"100vh",
       //     backgroundColor:"#231f1f",
            flexDirection:'column',
            alignItems:"center",
            justifyContent:"center"

        },
    root_header:{
        display:"flex",
        width:"100%",
        height:"10%",
    //    backgroundColor:"#c45656",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",



    },
    root_partOne:{
        display:"flex",
        width:"100%",
        height:"20%",
   //     backgroundColor:"#a55e5e",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",

    },
    root_partOne_div1:{
        display:"flex",
        width:"50%",
        height:"100%",
   //     backgroundColor:"#e29c9c",
        flexDirection:'row',
        alignItems:"left",
        justifyContent:"left",

    },
    root_partOne_div2:{
        display:"flex",
        width:"50%",
        height:"100%",
   //     backgroundColor:"#ea6262",
        flexDirection:'row',
        alignItems:"left",
        justifyContent:"left",

    },
    root_partOne_div2_div1:{
        display:"flex",
        width:"100%",
        height:"50%",
   //     backgroundColor:"#7f1c1c",
        flexDirection:'row',
        alignItems:"bottom",
        justifyContent:"bottom",

    },
    root_partTwo:{

        display:"flex",
        width:"100%",
        height:"20%",
    //    backgroundColor:"#195a8b",
        flexDirection:'column',
        alignItems:"bottom",
        justifyContent:"bottom",


    },
    root_partTwo_itemId:{

        display:"flex",
        width:"20%",
        height:"100%",
   //     backgroundColor:"#1b2f3e",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",

    }
    ,


    root_partTwo_Description:{

        display:"flex",
        width:"40%",
        height:"100%",
  //      backgroundColor:"#58a7e3",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",

    },
    root_partTwo_qty:{

        display:"flex",
        width:"20%",
        height:"100%",
   //     backgroundColor:"#0f334e",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",

    },
    root_partTwo_price:{

        display:"flex",
        width:"20%",
        height:"100%",
   //     backgroundColor:"#10181d",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",

    },


    root_partThree:{
        display:"flex",
        width:"100%",
        height:"10%",
  //      backgroundColor:"#10181d",
        flexDirection:'column',
        alignItems:"end",
        justifyContent:"end",

    },
    root_Four:{
        display:"flex",
        width:"100%",
        height:"30%",
     //   backgroundColor:"#0b0a2f",
        flexDirection:'column',
        alignItems:"end",
        justifyContent:"end",
    },
    root_partFive:{
        display:"flex",
        width:"100%",
        height:"10%",
   //     backgroundColor:"#3e123c",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    }














}))









export  default  function Invoice(){

    const orderDetail = {
        InvoiceId : "",
        date : "",
        itemId: " ",
        description: " ",
        qty:" ",
        price:"",



    }




    const [activeStep, setActiveStep] = React.useState({
        customerName: "",
        orderDetail :[

        ],



    });








    const classes = useStyles();

    return(
        <div className={classes.root}>

            <div className={classes.root_header}>
                <Typography variant="h4" gutterBottom style={{fontWeight:"bold"}} >
                    Invoice
                </Typography>

            </div>


            <div className={classes.root_partOne}>



                <div className={classes.root_partOne_div1}>
                    <div style={{
                        display:"flex",
                        width:"50%",
                        height:"100%",
                 //       backgroundColor:"#eaadad",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",
                    }} >
                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                   //         backgroundColor:"#7f4141",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>

                            <Typography
                                variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                Date
                            </Typography>
                        </div>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                   //         backgroundColor:"#391818",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",

                        }}>
                            <Typography variant="h6" gutterBottom  style={{fontWeight:"bold"}}>
                                Invoice Id
                            </Typography>

                        </div>

                    </div>

                    <div style={{
                        display:"flex",
                        width:"50%",
                        height:"100%",
               //         backgroundColor:"#cb3a3a",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",

                    }}>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                //            backgroundColor:"#7f4141",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",
                            border: "1px solid black"

                        }}>

                            <Typography variant="h6" gutterBottom >
                                2014-12-11
                            </Typography>
                        </div>

                        <div style={{
                            display:"flex",
                            width:"100%",
                            height:"50%",
                   //         backgroundColor:"#391818",
                            flexDirection:'column',
                            alignItems:"center",
                            justifyContent:"center",
                            border: "1px solid black"

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
                //            backgroundColor:"#e8d4d4",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",

                        }}>
                                <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                                    customer
                                </Typography>

                            </div>

                        <div style={{
                            width:"50%",
                            height:"100%",
                   //         backgroundColor:"#ea6565",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                        }}>
                            <TextField id="standard-basic" label="Customer Name" />

                        </div>


                    </div>


                </div>

            </div>



            <div className={classes.root_partTwo} >

                <div style={{
                    display:"flex",
                    width:"100%",
                    height:"50%",
             //       backgroundColor:"#512263",
                    flexDirection:'row',
                    alignItems:"center",
                    justifyContent:"center",


                }}>

                    <div className={classes.root_partTwo_itemId} style={{
                        border: "1px solid black",
                        backgroundColor:"#384933"
                    }}>
                        <Typography variant="h6" gutterBottom >
                            Item ID
                        </Typography>
                    </div>
                    <div className={classes.root_partTwo_Description} style={{
                        border: "1px solid black",
                        backgroundColor:"#384933"
                    }}>
                        <Typography variant="h6" gutterBottom >
                           Description
                        </Typography>
                    </div>
                    <div className={classes.root_partTwo_qty} style={{
                        border: "1px solid black",
                        backgroundColor:"#384933"
                    }}>
                        <Typography variant="h6" gutterBottom >
                            Qty
                        </Typography>
                    </div>
                    <div className={classes.root_partTwo_price} style={{
                        border: "1px solid black",
                        backgroundColor:"#384933"
                    }}>
                        <Typography variant="h6" gutterBottom >
                           price
                        </Typography>
                    </div>

                </div>


                <div style={{
                    display:"flex",
                    width:"100%",
                    height:"50%",
            //        backgroundColor:"#1f0828",
                    flexDirection:'row',
                    alignItems:"center",
                    justifyContent:"center",


                }}>

                    <div className={classes.root_partTwo_itemId}>
                        <TextField id="standard-basic" label="Item Id" />
                    </div>
                    <div className={classes.root_partTwo_Description}>
                        <TextField id="standard-basic" label="description" />
                    </div>
                    <div className={classes.root_partTwo_qty}>
                        <TextField id="standard-basic" label="Qty" />
                    </div>
                    <div className={classes.root_partTwo_price}>
                        <TextField id="standard-basic" label="Price" />
                    </div>



                </div>

            </div>


            <div className={classes.root_partThree}>
                <Button
                    variant="contained" color="primary"
                    style={{
                        width:"20%"

                    }}
                >
                   Add Table
                </Button>
            </div>


            <div className={classes.root_Four}>
                <TableContainer component={Paper} style={{width:"100%", height:"100%"}}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="Center" style={{fontWeight:"bold"}}>Item</TableCell>
                                <TableCell align="Center" style={{fontWeight:"bold"}}>Description</TableCell>
                                <TableCell align="Center" style={{fontWeight:"bold"}}>Qty</TableCell>
                                <TableCell align="Center" style={{fontWeight:"bold"}}>Amount</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" align="Center">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="Center">{row.calories}</TableCell>
                                    <TableCell align="Center">{row.fat}</TableCell>
                                    <TableCell align="Center">{row.carbs}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>




            </div>

            <div className={classes.root_partFive}>

                <div style={{
                    width:"20%",
                    height:"100%",
               //     backgroundColor:"#1f0828",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",


                }}>
                    <Typography variant="h6" gutterBottom >
                       Total
                    </Typography>

                </div >


                <div style={{
                    width:"20%",
                    height:"100%",
              //      backgroundColor:"#1f0828",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",

                }}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth

                    />


                </div >

                <div style={{
                    width:"20%",
                    height:"100%",
               //     backgroundColor:"#1f0828",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",

                }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{width:"80%"}}
                    >
                        Process
                    </Button>


                </div>

                <div style={{
                    width:"20%",
                    height:"100%",
                //    backgroundColor:"#1f0828",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",

                }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{width:"80%"}}
                    >
                      Clear
                    </Button>

                </div>





            </div>

        </div>


    );







}
