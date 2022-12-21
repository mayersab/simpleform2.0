import React, { useState, useEffect } from 'react';
import formStyle from '../styles/Form.module.css'
import Editform from './editform';

const Submitted = ({firstName, lastName, phone, email, id, passedDel, passedPatch}) => {

    const [state, setstate] = useState(false);

    const handleState = () => {
        setstate(!state)
    }

    const handleDel = async () => {
        const res = await fetch('/messages/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()

        if (res.ok) {
            passedDel()
           
        }
        if (!res.ok) {
            console.log(json.error)
        }
        
    }

    if (state) {
        return (
            <div>
                <Editform
                first={firstName}
                last={lastName}
                phone={phone}
                email={email}
                id={id}
                passedPatch={passedPatch}
                handleSub={handleState}
                />
            </div>
        )
    } else {
        return (
            <div className={formStyle.submitted}>
                <div >
                    <p><span>First Name:</span> {firstName}</p>
                    <p><span>Last Name:</span> {lastName}</p>
                    <p><span>Phone:</span> {phone}</p>
                    <p><span>Email:</span> {email}</p>
                    <button onClick={handleDel} className={formStyle.btn}>Delete</button>
                    <button onClick={handleState} className={formStyle.btn}>Edit</button>
                </div>
            </div>
        );


    }

}

export default Submitted;
