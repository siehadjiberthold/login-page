export default function Reduce( etat, action){
if (action.type=== "CONNEXION"){
  const objet={
    email : action.payload.mail,
    password : action.payload.password
  }
  console.log(window, objet)

  const JsonEcncoder = JSON.stringify(objet)
  if (localStorage.getItem('appStorage') === null){
    localStorage.setItem('appStorage', JsonEcncoder)
  } else {
    localStorage.setItem('appStorage', JsonEcncoder)
  }
  return "CONNEXION"
}
if (action.type=== "DECONNEXION"){
  return "DECONNEXION"
}
}