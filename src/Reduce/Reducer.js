export default function Reduce( etat, action){
if (action.type=== "CONNEXION"){
  const objet={
    email : action.payload.mail,
    password : action.payload.password
  }
  return "CONNEXION"
}
if (action.type=== "DECONNEXION"){
  return "DECONNEXION"
}
}