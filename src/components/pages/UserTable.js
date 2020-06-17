import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";
import UserTableData from './UsetTableData'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    
}));


 const UserTable = (props) => {
        console.log(props.userData);
          //const classes = useStyles();
           
 return(
    <Card>
        <CardContent>
            <table>
            
            <thead>
                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>

            <tbody>
             <UserTableData props={props}/>
            </tbody>
        </table>
         </CardContent>
    </Card>
    )
 }
            
    export default UserTable;

            

