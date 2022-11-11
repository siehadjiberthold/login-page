import React, { useContext, useState, useEffect } from 'react';
export default function Accuiel() {
  const [storage, setStorage] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appStorage = window.localStorage.getItem('appStorage');
      const JsonEncoder = JSON.parse(appStorage);
      console.log('encoder', JsonEncoder);
      setStorage(JsonEncoder);
    }
  }, []);
  console.log(storage);
  return <div>Bonjour {storage.email}</div>;
}
