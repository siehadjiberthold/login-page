import React from 'react';
 import ContactForm from './component/ContactForm'
function ContactForm() {
  return (
    <div className='contact'>
      <h1> Welcome Back</h1>
      <form>
        <input type="text"  placeholder= "log in with google" />
 <h3>ok login with your email</h3>
        <label for="surname">Email Adress</label>
        <input type="email" id="surname" placeholder=" Email Adress" />

        <label for="password">password</label>
        <input type="password" id="password" placeholder=" password" />
        <label>
        <input type="checkbox"/>
        keep me logged in
        </label>
        <label>
        <input type="text"/>
      <a href=""> forget your passeword?</a>  
        </label>
      </form>
      <button onclick="submit()">Log in</button>
      <p> 
        Don't have an account?
        <a href=""> sign in</a>
      </p>
    </div>
  );
}
export default ContactForm;
