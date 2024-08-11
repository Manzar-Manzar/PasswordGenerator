import React from "react";

export default function Btn({ clr }) {
    const print = () => {
        console.log("Hi");
    };

    return (
        <button 
            className={`bg-${clr}-400 mx-4 px-4 text-white py-2 rounded`} 
            onClick={print}
        >
            {clr}
        </button>
    );
}
