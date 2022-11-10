import React from 'react';
import './style.css';
import ContactForm from './component/ContactForm';
import Context from './context/Context'
export default function App() {
  return (
    <Context.Provider value= 'je suis la!'>
    <div className="bodyform">
      <ContactForm/>

    </div>
    </Context.Provider>
  );
}
