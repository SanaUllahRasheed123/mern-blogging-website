import  { useRef } from 'react'
import googleIcon from '../imgs/google.png'
import InputBox from '../components/input.component'

import {Link} from "react-router-dom"
import AnimationWrapper from '../common/page-animation'

const UserAuthForm = ({type}) => {
    const authForm = useRef();
    const handleSubmit = (e) =>{

        e.preventDefault();
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password



        //formData
        let form = new FormData(authForm.current);
        let formData = {};
        // console.log(form)

        for(let[key,value] of form.entries()){
            formData[key] = value;
        }
        // console.log(formData);
        //validating the date from frontend
        let {fullname,email,password} = formData;
   if(fullname){
    if(fullname.length < 3){
        return console.log({"error":"Fullname must be at least 3 letters long"})
    }
   }
    if(!email.length){
        return console.log({"error":"Enter Email "})
    }
    if(!emailRegex.test(email)){
        return console.log({"error":"Email is Invalid"})
    }
    if(!passwordRegex.test(password)){
        return console.log({"error":"Password should be 6 to 20 characters long with a numeric 1 lowercase and 1 uppercase letters"})
    }
    }
  return (
    <AnimationWrapper keyValue={type}>
        <section className='h-cover flex items-center justify-center'>
<form ref={authForm} className='w-[80%] max-w-[400px]'>
<h1 className='text-4xl font-gelasio capitalize text-center mb-24'>


{type == "sign-in" ? "Welcome back" : "Join Us Today"}

</h1>

{
    type != "sign-in" ?
    
    <InputBox
        name="fullname"
        type="text"
        placeholder="Full Name"
        icon="fi-rr-user"
    />
    : ""

}

<InputBox
        name="email"
        type="email"
        placeholder="abc@email.com"
        icon="fi-rr-envelope"
    />

<InputBox
        name="password"
        type="password"
        placeholder="Password"
        icon="fi-rr-key"
    />

    <button className='btn-dark center mt-14'
    type='submit' onClick={handleSubmit}>
        {type.replace("-"," ")}
    </button>

    <div className='relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold'>
    <hr className='w-1/2 border-black'/>
    <p>or</p>
    <hr className='w-1/2 border-black'/>


    </div>

    <button className='btn-dark flex items-center justify-center gap-4 w-[90%] center'>
    <img src={googleIcon} className='w-5'/>
        Continue with Google
    </button>

    {
        type = "sign-in" ?
        <p className='mt-6 text-dark-grey text-xl text-center'>
        Don't have an account ?
        <Link to="/signup" className="underline text-black text-xl ml-1">
        Join us today
        </Link>
        </p>
        :

        <p className='mt-6 text-dark-grey text-xl text-center'>
        Already a member?
        <Link to="/signin" className="underline text-black text-xl ml-1">
        Sign in here
        </Link>
        </p>
    }

</form>
    </section>
    </AnimationWrapper>
    
  )
}

export default UserAuthForm