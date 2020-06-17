import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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

const userTableData = (props) => {
   
       
    if (props.userData.length > 0){
        return(
            props.userData.map(i => (
                <tr key={i.id}>
                    <td>{i.email}</td>
                    <td>{i.first_name}</td>
                    <td>{i.last_name}</td>
                    <td>{i.dob}</td>
                    <td>{i.address}</td>
                    <td>{i.city}</td>
                    <td>{i.state}</td>
                    <td>{i.zip}</td>
                    <td>
                        <CardActions>

                            <IconButton arial-label="edit" onClick={() => {
                                props.editRow(i.id)
                            }}
                                className="button muted-button">
                                <EditIcon />
                            </IconButton>
                            <IconButton arial-label="delete" onClick={() => props.deleteUser(i.id)} className="button muted-button">
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </td>
                </tr>
            )))
    }else{
        return (
            <tr>
                <td colSpan={8}>Profile Empty!</td>
            </tr>
        )
    }
                        
       


}

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
             {userTableData()}
           
            </tbody>
        </table>
         </CardContent>
    </Card>
    )
 }
            
    export default UserTable;

            

