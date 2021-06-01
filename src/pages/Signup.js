import React from "react";
import {GlobalCtx} from "../App";

const Signup = (props) => {
        const {gState, setGState} = React.useContext(GlobalCtx)
        const {url} = gState

        // const [form, setForm] = React.useState(blank);

    return (
        <div>
            <h1>Sign up</h1>
        </div>
    )
}

export default Signup;