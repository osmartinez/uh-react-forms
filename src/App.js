import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';

function App() {
  const initialState = { name: "", surname: "", email: "", photo: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" }
  const [userData, setUserData] = useState(initialState)

  function changeData(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <h1>Regístrate</h1>
      <section>
        <UserForm userData={userData} handleChangeData={changeData}></UserForm>
      </section>
      <section>
        <h2>Resumen del formulario</h2>
        <h5>{`Hola me llamo ${userData.name} ${userData.surname} y mi email es: ${userData.email}`}</h5>
        <img src={userData.photo}></img>
      </section>
    </div>
  );
}

export default App;
