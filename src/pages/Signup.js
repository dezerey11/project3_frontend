import React from "react";
import {GlobalCtx} from "../App";

const Signup = (props) => {
        const {gState, setGState} = React.useContext(GlobalCtx)
        const {url} = gState

        const [form, setForm] = React.useState({
            username: "",
            password: ""
        });
        const handleChange = (event) => {
            setForm({...form, [event.target.name]: event.target.value})
        }

    return (
        <div>
            <h1>Sign up</h1>
            <br />
            <form>
                <h3>Username</h3>
                <input type="text" name="username" value={form.username} onChange={handleChange} />
                <h3>Password</h3>
                <input type="password" name="password" value={form.password} onChange={handleChange} />
                <br/>
                <br/>
                <input type="submit" name="signup" />

            </form>
        </div>
    )
}

export default Signup;