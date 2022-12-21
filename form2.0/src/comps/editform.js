import React from 'react';
import formStyle from '../styles/Form.module.css'
import appStyles from "../styles/App.module.css"
import { useState } from 'react';

const Editform = ({first, last, phone, email, id, passedPatch, handleSub}) => {

    const [form, setform] = useState({
        fname: first,
        lname: last,
        phone: phone,
        email: email,
    });

    const updateData = async () => {
        const res = await fetch('/messages/' + id, {
            method: 'PATCH',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()

    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setform((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const onSubmit = (e) => {
        if (!form.fname || !form.lname || !form.email || !form.phone) {
            e.preventDefault()
            alert('Please correctly fill in form')
            return
        } else {
            // Make fetch call PATCH
            updateData()
            passedPatch()
            handleSub()
        
        }
        
    }

    return (
        <div className={formStyle.submitted}>
            <form>
                
                <div className={formStyle.editform}>
                    <div>
                        <div>
                            <label htmlFor="fname">First Name:</label>
                        </div>
                        <div>
                            <input type="text" name='fname' value={form.fname}  onChange={handleChange} />
                        </div>
                    
                        <div>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div>
                            <input type="email" name='email' value={form.email} onChange={handleChange} />
                            
                        </div>
                    </div>
                    <div>
                    
                        <div>
                            <label htmlFor="lname">Last Name:</label>
                        </div>
                        <div>
                            <input type="text" name='lname' value={form.lname} onChange={handleChange} />
                        </div>
                    
                        <div>
                            <label htmlFor="phone">Phone:</label>
                        </div>
                        <div>
                            <input type="number" name='phone' value={form.phone} onChange={handleChange} />
                        </div>

                    </div>
                    
                </div>
                
            </form>
            <button onClick={onSubmit} className={formStyle.btn}>Submit</button>
        </div>
    );
}

export default Editform;
