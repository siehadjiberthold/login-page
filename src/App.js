import React from 'react';
import './style.css';
import ContactForm from './component/ContactForm';
export default function App() {
  return (
    <div className="bodyform">
      <div className="part contactform">
        <h1> Welcome Back</h1>
        <input type="text" placeholder=" login with Google" />
        <hr /> OK LOGIN WITH EMAIL
        <div>
          <form action="">
            <label htmlFor="">
              Email Adress
              <input type="text" placeholder="Email Adress" />
            </label>
            <label htmlFor="">
              Password
              <input type="text" placeholder="password" />
            </label>
            <label>
              <input type="checkbox" />
              keep me logged in
            </label>
            <label>
              <input type="text" />
              <a href=""> forget your passeword?</a>
            </label>
          </form>
          <button onclick="submit()">Log in</button>
          <p>
            Don't have an account?
            <a href=""> sign in</a>
          </p>
        </div>
      </div>

      <div
        className=" part academy"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/vectors/illustration-of-a-group-of-people-eating-outdoors-at-a-restaurant-vector-id1285195940?k=20&m=1285195940&s=612x612&w=0&h=rtDPS2a4dR-Z4m9JGaTpOyaWE1V8IXEmiVHwjtF3PGI= ")',
        }}
      >
        <div style={{ width: 300 }}>
          <p style={{ fontSize: 18, fontWeight: '700', marginBottom: 16 }}>
            {' '}
            Sleeknote Academy
          </p>
          <p>
            {' '}
            bienvenur dans sleenote academy <br /> veuillez renseigner vos
            information pour vous connecter a notre site{' '}
          </p>
          <button onclick="submit()">START ACADEMY</button>
        </div>
      </div>
    </div>
  );
}
