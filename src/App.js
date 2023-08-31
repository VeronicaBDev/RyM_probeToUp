import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import NavBar from './components/navBar/navBar.jsx';
import {useState, useEffect} from "react";
import axios from "axios";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"; 
//useLocation() es para saber donde estoy parado URL. [.pathname]
//useNavigate para redirigirme a otra url
//useEffect es para q al momento de cargar la pagina verifique si tengo o no acceso
import { createRoot } from 'react-dom/client';
import About from './views/about.jsx';
import Detail from './views/detail.jsx';
import LoginForm from './components/loginForm/loginForm.jsx';

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {

   const [characters, setCharacters] = useState([]); // creamos el estado
   //console.log('24 App' )
   //console.log(characters)

   //PTO 5 SEGURIDAD 
   const navigate = useNavigate();
   const [access, setAccess] = useState(false); // si el estado es false no ingresará
   const EMAIL = 'v@gmail.com';
   const PASSWORD = '1password';

   function login(userData) { // userData me llega x el formulario
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
//useEffect es para q al momento de montaje de la pagina, yo verifique si tengo o no acceso
// al ppio tengo access seteado en false
// cada vez q el acceso de mi pagina cambie vuelvo a ejecutar la fc

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   //PTO 2: renderiz condicional de la NavBar en fc de si estoy parado en la / o no
   const location = useLocation(); // devuelve obj {pathname: , }

   function searchHandler(id){
      //setCharacters([...characters, example]);

      //esta fc me cambiará el estado (q se llama characters): lo q en este caso, como
      //characters es un [] me lo modifica, con spread operator, agregandome
      //un nuevo elemento (un {})
      // Tendré lo q tenia en  los estados previos y
      // agregará uno nuevo
      //console.log('30 App se ejecutó en Card' + characters)

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters([...characters, data]); // igual poner setCharacters((oldChars) => [...oldchars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });

   }

   function closeHandler(id){ //aqui llega el id q quiero eliminar
      window.alert(id)
      //console.log(characters)
      let deleted = characters.filter(character => character.id !== Number(id)); // filter me devuelve el array con elems q cumplan la condic
      setCharacters(deleted);
      //console.log(deleted)
   }

   return ( // en Rote le digo q elemento renderizar en esa url
   // le envio a mi formulario la prop login con la fc login
      <div className='App'>
         {location.pathname !== "/" && <NavBar onSearch={searchHandler}/>}
        
         <Routes>
            <Route 
            path="/home" 
            element={<Cards characters={characters} onClose={closeHandler}/>}>               
            </Route>

            <Route 
            path="/about" 
            element={<About/>}>               
            </Route>

            <Route 
            path="/detail/:id" 
            element={<Detail/>}>
            </Route>

            <Route
            path="/"
            element={<LoginForm  login={login}/>}>
            
            </Route>
         </Routes>
         
      </div>
   );
}

export default App;
