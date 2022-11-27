import React from 'react';

let Second = () => {
    let data = "This is the data which will replaced after click."
    function callButton() {
        document.getElementById("root").style.background = "red";
        alert("This is on click event.")
    }
    return(<div>
    <h1>{data}</h1>
    <button onClick={callButton}>Click Me</button>
        </div>)
}

export default Second;