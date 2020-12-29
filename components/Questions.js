import { useState, useEffect } from "react";

//contains bank of questions
const Questions = props => {
    if (props.number == 1){
     return (<div className="text-green-500 font-sans">
        YELLOW</div>)
    }
    else if (props.number == 2){
        return (<div className="text-black font-sans">
           PINK</div>)
       }
    else if (props.number == 3){
        return (<div className="text-red-800 font-sans">
           GREEN</div>)
       }
    else if (props.number == 4){
        return (<div className="text-yellow-300 font-sans">
           PURPLE</div>)
       }
    else if (props.number == 5){
        return (<div className="text-purple-700 font-sans">
           BLUE</div>)
       }
    else if (props.number == 6){
        return (<div className="text-pink-500 font-sans">
           BLACK</div>)
       }
    else if (props.number == 7){
        return (<div className="text-red-500 font-sans">
           YELLOW</div>)
       }
    else if (props.number == 8){
        return (<div className="text-black font-sans">
           PINK</div>)
       }
    else if (props.number == 9){
        return (<div className="text-green-800 font-sans">
           PURPLE</div>)
       }
    else {
        return (<div className="text-yellow-500">BLUE</div>)
    }
}

export default Questions;