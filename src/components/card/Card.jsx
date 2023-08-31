//export default function Card(props) { // props.key y props.character
import { Link } from "react-router-dom";
export default function Card(props) {
   const {character, onClose} = props

 
   return ( //operador && si el lado izq existe retorna el der
      <div>
         <button onClick={()=> {onClose(character.id)}}>X</button>      
         <h2>Name: {character.name}</h2>
         <h2>Status: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
        
         
         
         <Link to={`/detail/${character.id}`} >
            <img src={character.image} alt={character.name} />     
         </Link> 
         
      
      </div>
   );
}
