import React,{ useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './Todolist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App () {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const Listofitems = () =>{
    if(input=="" || input==" ")
    {
      toast.warning("Input field empty!");
    }
    else{
        setItem ((oldItems) =>{
          return [...oldItems,input];
      }) 
      setInput("");
      toast.success("Item added successfully");
    }
    
  }
  const deleteItem = (id) =>{
    setItem ((oldItems) =>{
      return oldItems.filter((arrEle , index) =>{
        return index!==id;
      })
      
  }) 
  toast.error("Item deleted successfully");
    
}
  return (
    <>
    <div >
    <div className='bg-dark text-white '>
      <h3 className='px-2 py-1'>Todolist</h3>
    </div>
    <ToastContainer />
    <div style={{marginTop:"150px"}}>
        <div className='rounded-top border shadow p-3 mb-5 bg-white rounded' >
            <h2 className='title text-center bg-warning text-white '>Todo List</h2>
            <div className='row justify-content-center'>
              <label className='my-2 text-center ' htmlFor="input">Add to the Todo List</label>
              <input id="input" type="text" placeholder='Add Items Here'  className='form-control w-50 h-50' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            </div>
            <div className='text-center'>
              <button  className='btn btn-success mx-2 my-4 ' onClick={Listofitems}>Add</button>
            </div>
            
            <ol className='list-group my-4'>
              {item.map((cvalue,index)=>{
                  return <Todolist key={index} id={index} text={cvalue} onSelect={deleteItem}/>
              })}
            </ol>
        </div>
    </div>
    <div className='bg-dark text-white fixed-bottom'>
      <p className='my-2 text-center'>Developed by Sachin Sen Sks</p>
    </div>
    </div>
    </>
  );
}

export default App;
