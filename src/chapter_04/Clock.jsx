import React from "react";

function Clock(props){
    return(
        <div>
            <h1>Hi React</h1>
            <h2>time is : {new Date().toLocaleDateString()}</h2>
        </div>
    );
};

export default Clock;