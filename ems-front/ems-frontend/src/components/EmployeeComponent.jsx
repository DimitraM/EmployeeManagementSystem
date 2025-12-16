import React, { useState } from 'react';

export const EmployeeComponent = () => {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');

    // This function handles changes in the input field
    const handleFirstNameChange = (e) => {
        setfName(e.target.value);
    };
    const handleLastNameChange=(e)=>{
        setlName(e.target.value);
    };
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    function saveEmployee(e){
        e.preventDefault();
        const employee = {fName,lName,email}
        console.log(employee);
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'> 
                    <h2 className='text-center mt-2'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='fName'
                                    value={fName}
                                    className='form-control'
                                    onChange={handleFirstNameChange} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lName'
                                    value={lName}
                                    className='form-control'
                                    onChange={handleLastNameChange} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={handleEmailChange} 
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
