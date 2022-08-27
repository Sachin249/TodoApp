import React from 'react'
import './index.css';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
function Todolist(props) {
    return (
    <>
    <div className='container'>
        <span></span>
        <ol>
        <li  className='list list-group-item' style={{background:"#FCF998",marginTop:"3px"}}><span >{props.text}</span> <DeleteForeverTwoToneIcon  style={{color:"red",float:"right",cursor:"pointer"}}  onClick={()=>{props.onSelect(props.id)}}/></li>
        </ol>
    </div>
    
    </>
    )
}

export default Todolist;