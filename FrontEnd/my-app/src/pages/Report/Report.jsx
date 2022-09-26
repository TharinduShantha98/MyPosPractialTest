
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

function createData(name, calories, fat, carbs, ) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('I00011', '2022/05/14', 500000, "jayalath", ),


];



const useStyles  =  makeStyles((theme) =>({






    root:{
        display:"flex",
       // width:"100vw",
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
    root_main:{

        display:"flex",
        width:"100%",
        height:"70%",
    //    backgroundColor:"#975353",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",


    },
    root_main_partOne:{

        display:"flex",
        width:"100%",
        height:"10%",
    //    backgroundColor:"#66dc72",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",

    },
    root_main_partTwo:{
        display:"flex",
        width:"100%",
        height:"10%",
    //    backgroundColor:"#38493a",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    },
    root_main_partThree:{

        display:"flex",
        width:"100%",
        height:"60%",
   //     backgroundColor:"#143217",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
    },
    root_main_partFour:{
        display:"flex",
        width:"100%",
        height:"10%",
    //    backgroundColor:"#143217",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",

    },


    root_footer:{
        display:"flex",
        width:"100%",
        height:"20%",
    //    backgroundColor:"#8d5f5f",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",

    },





    textField: {

        width:"80%",
    },







}))

export  default  function Report(){


    const [dateFrom, setDateForm] = React.useState('');
    const [dateTo, setDateTo] = React.useState('');


    const classes = useStyles();



    return(
        <div className={classes.root}>
            <div className={classes.root_header}>
                <Typography variant="h4" gutterBottom style={{fontWeight:"bold"}} >
                   Report
                </Typography>

            </div>
            <div className={classes.root_main}>

                <div className={classes.root_main_partOne}>
                    <div style={{
                        width:"50%",
                        height:"100%",
                   //     backgroundColor:"#1d3918",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",
                    }} >

                        <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                           Date From
                        </Typography>

                    </div>

                    <div style={{
                        width:"50%",
                        height:"100%",
                 //       backgroundColor:"#3f443e",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",}}>
                        <Typography variant="h6" gutterBottom style={{fontWeight:"bold"}} >
                            Date To
                        </Typography>


                    </div>

                </div>

                <div className={classes.root_main_partOne}>
                    <div style={{
                        width:"50%",
                        height:"100%",
              //          backgroundColor:"#1d3918",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",
                    }} >

                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />



                    </div>

                    <div style={{
                        width:"50%",
                        height:"100%",
            //            backgroundColor:"#3f443e",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center",}}

                    >

                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                    </div>

                </div>

                <div  className={classes.root_main_partFour}>
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </div>

                <div  className={classes.root_main_partThree}>
                    <TableContainer component={Paper} style={{width:"100%", height:"100%"}}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="Center" style={{fontWeight:"bold"}}>Invoice Num</TableCell>
                                    <TableCell align="Center" style={{fontWeight:"bold"}}>Date</TableCell>
                                    <TableCell align="Center" style={{fontWeight:"bold"}}>Amount</TableCell>
                                    <TableCell align="Center" style={{fontWeight:"bold"}}>Customer</TableCell>

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


            </div>


            <div className={classes.root_footer}>

                <div style={{
                    width:"20%",
                    height:"50%",
                  //  backgroundColor:"#000",

                }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{width:"60%"}}


                    >
                       print
                    </Button>


                </div>


                <div style={{
                    width:"20%",
                    height:"50%",
                //    backgroundColor:"#000"
                }}><Button
                    variant="contained"
                    color="primary"
                    style={{width:"60%"}}>
                    Clear
                </Button>

                </div>



            </div>


        </div>



        )





}
