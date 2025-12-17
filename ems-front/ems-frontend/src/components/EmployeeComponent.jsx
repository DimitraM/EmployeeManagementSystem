import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee  } from '../services/EmployeeService';
import {useNavigate,useParams} from 'react-router-dom'

export const EmployeeComponent = () => {

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    // This function handles changes in the input field
    const handleFirstNameChange = (e) => setfName(e.target.value);
    const handleLastNameChange=(e)=>setlName(e.target.value);
    
    const handleEmailChange=(e)=>setEmail(e.target.value);

    const {id} = useParams();
    const [errors,setErrors]=useState({
        fName:'',
        lName: '',
        email:''
    });

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setfName(response.data.fName);
                setlName(response.data.lName);
                setEmail(response.data.email)
            }).catch(error =>{
                console.log(error);
            })
        }
    },[id]); 

    function saveOrUpdateEmployee(e){
        e.preventDefault();
        const employee = {fName,lName,email}

        if(validateForm()){
            //if there is id in the url -> we are updating
            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error=>{
                    console.log(error)
                })
            }
            else{
                createEmployee(employee).then(response=>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error=>{
                    console.log(error);
                });
            }



        }
    }

    function validateForm(){
        let valid=true;

        const errorsCopy ={... errors} //copy of the errors from the top
        //Validation scope start
        if(fName.trim()){
            errorsCopy.fName='';
        }else{
            errorsCopy.fName='First name is required'
            valid=false;
        }
        if(lName.trim()){
            errorsCopy.lName='';
        }else{
            errorsCopy.lName='Last name is required'
            valid=false;
        }
        if(email.trim()){
            errorsCopy.email='';
        }else{
            errorsCopy.email='Email is required'
            valid=false;
        }
        //Validation scope end
        setErrors(errorsCopy);
        return valid;


    }
    function pageTitle(){
        if(id)
            return <h2 className='text-center mt-2'>Update Employee</h2>
        else
            return <h2 className='text-center mt-2'>Add Employee</h2>
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'> 
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='fName'
                                    value={fName}
                                    className={`form-control ${errors.fName? 'is-invalid':''}`}
                                    onChange={handleFirstNameChange} 
                                />
                                {errors.fName && <div className='invalid-feedback'>{errors.fName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lName'
                                    value={lName}
                                    className={`form-control ${errors.lName? 'is-invalid':''}`}
                                    onChange={handleLastNameChange} 
                                />
                                {errors.lName && <div className='invalid-feedback'>{errors.lName}</div>}

                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>                                
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email?'is-invalid':''}`}
                                    onChange={handleEmailChange} 
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-outline-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
