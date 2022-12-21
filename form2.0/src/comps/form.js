import React from 'react';
import { useEffect, useState } from 'react';
import formStyle from '../styles/Form.module.css'


const Form = ({passedFunc}) => {

     const [form, setform] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
    });

    const postData = async () => {
        const res = await fetch('/messages', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await res.json()
        

        if (res.ok) {
            setform({
                fname: '',
                lname: '',
                phone: '',
                email: '',
            })
    
        }
        if (!res.ok) {
            alert(json.error)
        }
        
    }


    const onSubmit = (e) => {
        if (!form.fname || !form.lname || !form.email || !form.phone) {
            e.preventDefault()
            alert('Please correctly fill in form')
            return
        } else {
            // Make fetch call POST
            postData() 
            passedFunc()
        }
        
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

    return (
        <div>
            <form>
                
                <h2 className={formStyle.title}>Simple Form</h2>
                <div className={formStyle.form}>
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

export default Form;
