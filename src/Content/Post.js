import React from 'react'
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import DisplayPost from './DisplayPost'

function Post() {
    const [Ipost ,setIpost ]= useState(null)
    const [Loading ,setLoading ]= useState(true)
    const [error , seterror ]= useState(null)

    useEffect(() => {
        const abortCont= new AbortController();
        setTimeout(()=>{
            fetch('http://localhost:8000/PostTable',{ })
            .then(res => {
                if(!res.ok){
                    throw error("Can't fetch data, error")
                }
                return res.json();
            })
            .then(data => {
                setIpost(data);
                console.log('sdfs')
                setLoading(false);
            })
            .catch(err =>{
                if(err.name === "AbortError"){
                    console.log("fetched aborted")
                }
                else{
                    console.log(err)
                }
            })
        },1000) 
          
        return ()=> abortCont.abort();    
    },[])

    //console.log(Ipost)

  return (
    <div>
        {Loading && <div className="spinner-border text-info" role="status"></div>}
        {Ipost && <DisplayPost ipost={Ipost} />}
    </div>
  )
}

export default Post
