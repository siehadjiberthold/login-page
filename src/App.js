import React, { useReducer, useState, useEffect } from 'react';
import './style.css';
import ContactForm from './component/ContactForm';
import Context from './context/Context';
import Reduce from './Reduce/Reducer';
import Accuiel from './Accuiel';

export default function App() {
  const [etat, dispatch] = useReducer(Reduce, 'DECONNEXION');
  const [appState, setAppState] = useState(etat);

  useEffect(() => {
    setAppState(etat);
  }, [etat]);

  const Navigation = () => {
    if (appState === 'DECONNEXION') {
      return <ContactForm />;
    }

    if (appState === 'CONNEXION') {
      return <Accuiel />;
    }
  };
  return (
    <Context.Provider
      value={{
        etat,
        dispatch,
      }}
    >
      <div className="bodyform">
        {Navigation()}
      </div>
    </Context.Provider>
  );
}
