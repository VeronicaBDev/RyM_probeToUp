import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({onSearch}){
    
    return (
      <div>
         <div> 
            <Link to= "/about">About</Link>
            <Link to= "/home">Home</Link>
         </div>
      
         <SearchBar onSearch={onSearch}/>            
      </div>         
     );
  }
  
  