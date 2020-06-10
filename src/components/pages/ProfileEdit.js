import React, { useState } from "react";
import axiosWithAuth from '../../functions/axiosWithAuth'





    const ProfileEdit = (props) => (
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
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
            ):(
                <tr>
                    <td colSpan={8}>Profile Empty!</td>
                </tr>
            )}
            </tbody>
        </table>
    )
            
    export default ProfileEdit;

            

