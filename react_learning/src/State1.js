import React from "react";
import { useState } from "react";
function State1(){
    let [data,setData] = useState(0);
    function updateData(){
    document.getElementById("root").style.background = "green";
      setData(data + 1);
    }
    return <div>
        <h1>{data}</h1>
        <button onClick={updateData}>Click Button</button>
        </div>
}

export default State1