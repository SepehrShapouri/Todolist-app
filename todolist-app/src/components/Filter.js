import React, { useState } from "react";
import { BsSortAlphaDown } from "react-icons/bs";
import Select from "react-select"
const options = [
    {value:"All", label:"All"},
    {value:"Completed" ,label:"Completed" },
    {value:"unCompleted" ,label:"Uncompleted" }
]
const Filter = ({status,changeHandler}) => {
    return ( 
        <Select options={options} onChange={(e)=>changeHandler(e)} defaultValue={status}/>
     );
}
 
export default Filter;