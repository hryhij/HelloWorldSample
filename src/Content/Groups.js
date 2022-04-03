import React from 'react'
import { useState,useEffect } from "react";
import GroupDisplay from './GroupDisplay';



function Groups() {
    const [Igroups ,setIgroups ]= useState(null)
    const [Loading ,setLoading ]= useState(true)
    const [error , seterror ]= useState(null)
    let headers = new Headers();

    useEffect(() => {
        const abortCont= new AbortController();
            fetch('http://localhost:8080/getGroups', {
                method : "GET",
                mode: 'cors',   
                headers: {                  
                },
                signal : abortCont.signal
              })
            .then(res => {
                if(!res.ok){
                    throw error("Can't fetch data, error")
                }
                return res.json();
            })
            .then(data => {
                setIgroups(data);
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

          
        return ()=> abortCont.abort();    
    },[])


  return (
    <div>
        {Loading && <div className="spinner-border text-info" role="status"></div>}
        {Igroups && <GroupDisplay Igroups ={Igroups}/>}

        
    </div>
  )
}

export default Groups
