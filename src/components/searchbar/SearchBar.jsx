import {useState} from "react";
export default function SearchBar(props) {
   const {onSearch} = props;
   
   const [id, setId] = useState(""); // creamos el estado local
   console.log('6 de SearchBar, ahora veré el id' )
   console.log(id)
   
   //fc changeHandler actualiza el estado, ingresando un nuevo id 
   function changeHandler(e){ //evento ingreso un char al input
      e.preventDefault();
      console.log('e');
      console.log(e.target);
      let newId = e.target.value;
      console.log(newId);

      setId(newId); 
      //setCharacters([...characters, example]); 
      //esta fc me cambiará el estado (q se llama characters): lo q en este caso, como 
      //characters es un [] me lo modifica, con spread operator, agregandome
      //un nuevo elemento (un {})
      // Tendré lo q tenia en  los estados previos y 
      // agregará uno nuevo
      
      console.log('25 SearchBar agregó un Id')
      console.log(id)
      console.log('27 SearchBar agregó un Id')
   }


   return (
      <div>         
         <input type='search' onChange={changeHandler} /> 
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   
   );
}
