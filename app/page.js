"use client"
import React, { useState } from 'react'

export const page = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const HandleChange= (e) => {
    e.preventDefault();
    if (title === '' || description === '') {
      alert('Please fill in all fields');
      return;
    }
    setTasks([...tasks, {title, description}]);
    setTitle('');
    setDescription('');
  }

  const handleDelete = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks);
  }
let lists= "No tasks added yet";
if (tasks.length > 0){
  
  lists = tasks.map((item, i) => {
    return(
     <tr key={i} className='bg-gray-100 w-full p-5 flex justify-between items-center border-b-1 border-gray-500'>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td><button className='bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4' onClick={() => {handleDelete(i)}}>Delete</button></td>
    </tr>
    );
  })};
  

  return (
    <>
    <div className='flex flex-col items-center justify-center bg-black min-h-52'>  
      <h1 className='text-white font-bold text-6xl'>To do List</h1>
    </div>
    <div className='flex flex-col items-center justify-center mt-10'>
      <form onSubmit={HandleChange}>
        <input type="text" placeholder='Enter your task' className='border-2 border-gray-300 rounded-md p-2 mt-4 mr-2' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        <input type="text" placeholder='Enter your Description' className='border-2 border-gray-300 rounded-md p-2 mt-4 mr-2' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4' >Add Task</button>
      </form>
    </div>
    <div className='flex flex-col items-center justify-center bg-red-400 p-10 mt-10'>
    <table className='w-full'> 
  <thead>
    <tr className='bg-gray-200 w-full p-5 flex justify-between items-center'> 
      <th>Task</th>
      <th>Description</th>
      <th className='mr-4'>Delete</th>
    </tr>
  </thead>
  <tbody>
    {lists}
  </tbody>
</table>

      </div>
    </>
  )
}

export default page