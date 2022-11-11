import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Context from '../context/Context';
import ContactForm from './component/ContactForm';
function ContactForm() {
  const { etat, dispatch } = useContext(Context);

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  console.log(etat);
  return (
    <div className="bodyform">
      <div className="part contactform">
        <div className="formContent">
          <div style={{ textAlign: 'center', marginBottom: 12 }}>Sleeknote</div>
          <h1 style={{ textAlign: 'center', marginBottom: 12 }}>
            {' '}
            Welcome Back
          </h1>
          <button> log whith Google</button>
          <hr /> OR LOGIN WITH EMAIL
          <div>
            <form action="">
              <div>
                <label htmlFor="">Email Address</label>
                <input
                  type="mail"
                  placeholder="Email Address"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
              </div>
            </form>

            <div className="check">
              <label htmlFor="">
                <input type="checkbox" />
                keep me logged in
              </label>
              <a href=""> forget your passeword?</a>
            </div>

            <button
              onClick={() => dispatch({ type: 'CONNEXION' })}
              style={{ backgroundColor: ' rgb(128, 128, 241)' }}
            >
              Log in
            </button>
            <p className="signIn">
              Don't have an account?
              <a href=""> sign in</a>
            </p>
          </div>
        </div>
      </div>

      <div
        className=" part academy"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/vectors/illustration-of-a-group-of-people-eating-outdoors-at-a-restaurant-vector-id1285195940?k=20&m=1285195940&s=612x612&w=0&h=rtDPS2a4dR-Z4m9JGaTpOyaWE1V8IXEmiVHwjtF3PGI= ")',
        }}
      >
        <div className="academyblock" style={{ width: 300 }}>
          <p style={{ fontSize: 18, fontWeight: '700', marginBottom: 16 }}>
            {' '}
            Sleeknote Academy
          </p>
          <p>
            {' '}
            bienvenur dans sleenote academy <br /> veuillez renseigner vos
            information pour vous connecter a notre site{' '}
          </p>
          <button className="btn">START ACADEMY</button>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
