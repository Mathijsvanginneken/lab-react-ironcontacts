import './App.css';
import contacts from "./contacts.json";
import { useState } from "react"



function App() {

  
  const firstFive = contacts.splice(0, 5);
  const [contactList, setContacts] = useState(firstFive)
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
  let newContact = firstFive.push(randomContact)
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => setContacts(newContact)}>Add Random Contact</button>
     <table>
     { contactList.map((contact)=>{
      return(
        <div>
        <p>Name: {contact.name}</p>
        <p>Popularity: {contact.popularity}</p>
        <p>Won Oscar: {contact.wonOscar ? <img src= "\favicon.ico" alt="trophy"/> : "no content"}</p>
        <p>Won Emmy: {contact.wonEmmy? <img src= "\favicon.ico" alt="trophy"/> : "no content"}</p>
        <img src= {contact.pictureUrl} alt=""/>
        </div>
        )})}
     </table>
    </div>
  );
}

export default App;
