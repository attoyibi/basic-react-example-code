import React, {Component} from 'react';

export default function Hoc(HocComponent){
    console.log("HocComponent", HocComponent);
    return class extends Component{
        render(){
            return (
                <div style={{backgroundColor: "red"}}>
                    <HocComponent></HocComponent>
                </div>
            );
        }
    } 
}