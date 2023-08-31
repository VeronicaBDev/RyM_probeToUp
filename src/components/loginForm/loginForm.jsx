import {useState} from "react";

function validar(input) {
    let errors = {};
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // regex para saber si contiene un @ y al menos 3 letras desp del pto
    let numbersRegex = /\d/; // regex para saber si contiene al menos un nro
  
    // if (!input.email) {
    //   errors.email = "Enter your email";
    // }
    if (!emailRegex.test(input.email)) {
      errors.email = "Invalid email";
    }
    if (input.email.length >= 35) {
      errors.email = "No more than 35 characters please";
    }
    if (!numbersRegex.test(input.password)) {
      errors.password = "Password must contain a number";
    }
    if (input.password.length < 6 || input.password.length > 10) {
      errors.password = "Passwors must be between 6 and 10 characters";
    }
  
    return errors; // obj vecio o con alfuno de los errores
  }

function LoginForm({login}){ // aqui rxbo la prop login q trae la fc login desde App
    const [user, setUser] = useState({ //genero mi estado local
        email: "",
        password: "",
    })
    
//GENERO OTRO ESTADO EN MI COMPONENTE
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    //cuando haré el cx de estado:
    function handleChange(e){
        //e.preventDefault();
        //console.log("linea 11 de loginForm: obj estado:")
        //console.log (user)
        setUser({...user, 
            [e.target.name]: e.target.value,
        }) // [e.target.name] propiedad q puede tomar valor email o password
        //console.log("linea 14 de loginForm: obj estado:")
        //console.log (user)

        //valido y cambio el estado errors: cambio este estado al igual q el otro estado y el campo q tenga un error lo señalo
        setErrors(
            validar({
                ...user, 
                [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault(user);
        if(!errors.email && !errors.password){
            login(user)
        }else{
            alert('incorrect data');
        }
    }

    return (
        <div>
            <h1>Ingresa tus credenciales</h1>
            <form onSubmit={handleSubmit}>         
                <label>User</label>
                <input type="text" placeholder="vero@gmail.com" name="email" value={user.email} onChange={handleChange}></input>
                {errors.email && <span>{errors.email}</span>}

                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                {errors.password && <span>{errors.password}</span>}

                <button type="submit" >Login</button>
            </form>
        </div>

    )
}

export default LoginForm;