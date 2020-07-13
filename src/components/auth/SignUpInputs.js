import React  from "react";
import { styles } from "./authStlyes";

const SignUpInputs =({signUpChange, handleSubmit, form}) => {
    const classes = styles();
    
    const commomProps = { 
        className: classes.inputs,
        onChange: signUpChange,
    }
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <p id="error-message" style={{ display: "none", color: "red" }}>
            **The username and email must be unique** </p>
            <input type="text" name="username" placeholder="Username (required)"
                value={form.username} {...commomProps} required 
            />
            <input type="email" name="email" placeholder="Email (required)"
                value={form.email} {...commomProps} required
            />
            <input type="password" name="password" placeholder="Password (required)" 
                value={form.password} {...commomProps} required
            />
            <button className={classes.submit} style={{ background: "#8BC34A" }}>
                Submit </button>
        </form>
    )
}
export default SignUpInputs;
