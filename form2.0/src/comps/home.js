import React from 'react';
import appStyles from "../styles/App.module.css"
import Form from "../comps/form";
import Submitted from "../comps/submitted";
import Editform from './editform';
import { useState, useEffect } from "react";

const Home = () => {
    const [state, setstate] = useState([]);

    const readData = async () => {
      const res = await fetch('/messages')
      const json = await res.json()
      
      if (res.ok) {
        setstate(json)
      }

    }

    const handleState = () => {
      readData()
    }
    
  // retrieves all messages from db

    useEffect(() => {
      readData()
  
    }, [])

    // const handleDel = async (id) => {
    //     const res = await fetch('/messages/' + id, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const json = await res.json()

    //     if (res.ok) {
    //       console.log(json)
    //       console.log(state) 
    //     }
    //     if (!res.ok) {
    //         console.log(json.error)
    //     }
    // }

    return (
      <div className={appStyles.container}>
        <div className={appStyles.formcont}>
            <Form passedFunc={handleState} />
        </div>
        <div>
      
        </div>
        <div>
        {
          state.map((msg) => {
            return (
              <div key={msg._id}>
                <Submitted
                  firstName={msg.fname}
                  lastName={msg.lname}
                  email={msg.email}
                  phone={msg.phone}
                  passedDel={handleState}
                  id={msg._id}
                  passedPatch={handleState}
                />
              </div>
            )
          })
        }
        </div>
        
      </div>
    );

}

export default Home;
