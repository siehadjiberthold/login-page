import React,{useReducer, useState, useEffect} from 'react';
import './style.css';
import ContactForm from './component/ContactForm';
import Context from './context/Context';
import Reduce from './Reduce/Reducer'

export default function App() {

  const [ etat, dispatch]=useReducer(Reduce,'DECONNEXION')
const [AppState,setAppState]=useState(etat)
  return (
    <Context.Provider value= {{
etat,
dispatch
    }}>

    <div className="bodyform">
      <ContactForm/>
      <accuiel/>
    </div>
    </Context.Provider>
  );
}
