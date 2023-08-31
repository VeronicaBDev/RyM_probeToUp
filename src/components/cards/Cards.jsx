import Card from '../card/Card';

export default function Cards(props) { 
   /*
   {props}

   */
   //console.log(props);
   // props: {Obj Characters q exporte x def:
   // es un [] de objetos, 1 x personaje
   const {characters} = props
   const {onClose} = props
   
   return(
      <div>
         {characters.map((character) => ( //{characters?.map((character) => ( // AQUI EL ? ES UN &&: SI EXISTE CHARACTERS LO MAPEA
         // LO USO CDO TENGO OBJETOS ANIDADOS PARA Q NBO SE ROMPA LA PAGINA SI NO HAY PERSONAJES
            <Card key={character.id} character= {character} onClose={onClose} />
         ))}
      </div>
   );
}
