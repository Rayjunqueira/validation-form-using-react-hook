import './form.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';

const schema = yup.object({
    name: yup.string().required('Name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email must be valid').required('email is required'),
    password: yup.string().min(6, "The password must be at least 6 digits long.").required(),
    confirmPassword: yup.string().required().oneOf([yup.ref("password")],"Passwords must be the same"),
  }).required();

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
        function onSubmit(userData) {
        console.log(userData)
        window.location.href="/success";
    };
    
  return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label>Name</label>
                <input className="registerInput" type="text" placeholder="Enter your name..." {...register("name", { required: true })}  />
                {errors.name && <span id='error1'>{errors.name?.message}</span>}

                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter your username..." {...register("username", { required: true })}/>
                {errors.username && <span id='error2'>{errors.username?.message}</span>}

                <label>Email</label>
                 <input className="registerInput" type="text" placeholder="Enter your email..." {...register("email", { required: true })}/>
                 {errors.email && <span id='error3'>{errors.email?.message}</span>}


                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." {...register("password", { required: true })}/>
                {errors.password && <span id='error4'>{errors.password?.message}</span>}
                
                <label>Password Again</label>
                <input className="registerInput" type="password" placeholder="Confirm your password..." {...register("confirmPassword", { required: true })} />
                {errors.confirmPassword && <span id='error5'>{errors.confirmPassword?.message}</span>}
                
                <button className="registerButton">Register</button>
            </form>
        </div> 
   )
}

export default Form