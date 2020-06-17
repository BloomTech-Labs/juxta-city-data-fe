import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function UsetTableData({props}) {
    if (props.userData.length > 0) {
        return (
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
    } else {
        return (
            <tr>
                <td colSpan={8}>Profile Empty!</td>
            </tr>
        )
    }
}

export default UsetTableData
