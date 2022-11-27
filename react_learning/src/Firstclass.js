import React from "react";
// import { ReactDOM } from "react";

class Firstclass extends React.Component{
    render(){
        return( <div>
            <table border = "5px">
                <thead>
                <td>ID</td>
                <td>Name</td>
                <td>Salary</td>
                </thead>
                <tbody>
                    <td>101</td>
                    <td>Abhay</td>
                    <td>12LPA</td>
                </tbody>
            </table>
        </div>

    );
        }
}

export default Firstclass;