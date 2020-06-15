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
    // avatar: {
    //     backgroundColor: red[500],
    // },
}));

    const UserTable = (props) => {
         const classes = useStyles();

 return(
    <Card>
        <table>
            <CardContent>
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
            </CardContent>
            <tbody>
            <CardContent>
            {props.userData.length > 0 ? (
                props.userData.map(i => (
                <tr key={i.id}>
                    <td>Email data</td>
                    <td>First Name data</td>
                    <td>Last Name data</td>
                    <td>DOB data</td>
                    <td>Address data</td>
                    <td>City data</td>
                    <td>State data</td>
                    <td>Zip data</td>
                    <td>
                        <CardActions>

                            <IconButton arial-label="edit">
                                <EditIcon/>
                            </IconButton>
                            <IconButton arial-label="delete" onClick={()=> props.deleteUser(i.id)} className="button muted-button">
                                 <DeleteIcon/>
                            </IconButton>
                        </CardActions>
                    </td>
                </tr>
            ))
            ):(
                <tr>
                    <td colSpan={8}>Profile Empty!</td>
                </tr>
            )}
            </CardContent>
            </tbody>
        </table>
    </Card>
    )
 }
            
    export default UserTable;

            

