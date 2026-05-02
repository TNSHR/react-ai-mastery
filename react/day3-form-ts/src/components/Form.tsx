import {useState} from 'react';
import type {FormData,FormErrors } from '../types/form.types';
import {validateForm, getPasswordStrength} from '../utils/validation';

const Form = () =>{
    const [formData, setFormData] = useState<FormData>({
        email:"",
        password:"",
        confirmPassword:"",

    })

    const [errors, setErrors] = useState<FormErrors>({});
    const [sucess,setSucess] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const validationErrors = validateForm(formData);            
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setSucess(true);
            setFormData({
                email:"",
                password:"",
                confirmPassword:"",
            }); 
        } else {
            setSucess(false);
        }
    }
    const passwordStrength = getPasswordStrength(formData.password);
    const isDisabled = Object.keys(errors).length > 0 || !formData.email || !formData.password || !formData.confirmPassword;
    
    return(
        <div>
            <h2>Registration Form</h2>
            {sucess && <p style={{color:"green"}}>Registration successful!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
                    {formData.password && <span>Password Strength: {passwordStrength}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <span style={{color:"red"}}>{errors.confirmPassword}</span>}
                </div>
                <button type="submit" disabled={isDisabled}>Register</button>
            </form>
        </div>  
    )
}
export default Form;