import React from 'react'
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddPost() {
  const [Title , setTitle] = useState('');
  const [Info , setInfo] = useState('');
  const [Detail , setDetail] = useState('');
  const history = useHistory();

const onSubmitfunc = (e) =>{
  e.preventDefault();

  let infos = {
    postTitle : Title,
    postSub : Info,
    postDetail : Detail,
    postPriority : '2'
  }

  fetch('http://localhost:8000/PostTable',{
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(infos)
  })
  .then(() => {
    history.push('/Post')
    console.log("Added Successfully")
  })
  .catch(err =>{
        alert(err)
  })

  console.log(infos)
}

  return (
        <form className='d-flex justify-content-center' onSubmit={onSubmitfunc}>
            
            <div className="form-group col-lg-3">
                <h2 className="fw-bold">Add Post</h2>

                <input type="text" className='form-control iInput' placeholder='Title' onChange={e => setTitle(e.target.value)}></input>
                <input type="text" className='form-control iInput' placeholder='Information' onChange={e => setInfo(e.target.value)}></input>
                <textarea className='form-control iInput' placeholder='Details' onChange={e => setDetail(e.target.value)}></textarea>
                <button className="btn btn-info iInput" style={{width: '100%'}} id="submitbtn"> Save </button>
            </div>
            
        </form> 
  )
}

export default AddPost
