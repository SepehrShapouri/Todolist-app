import React from "react";
import Select from "react-select"
const options = [
    {value:"All", label:"All"},
    {value:"Completed" ,label:"Completed" },
    {value:"unCompleted" ,label:"Uncompleted" }
]
const Filter = () => {
    return ( 
        <Select options={options}/>
     );
}
 
export default Filter;