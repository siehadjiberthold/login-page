import React,{useReducer} from 'react';
import './style.css';
import ContactForm from './component/ContactForm';
import Context from './context/Context';
import Reduce from './Reduce/Reducer'

export default function App() {

  const [ etat, dispatch]=useReducer(Reduce,'')

  return (
    <Context.Provider value= {{
etat,
dispatch
    }}>
      
    <div className="bodyform">
      <ContactForm/>

    </div>
    </Context.Provider>
  );
}
