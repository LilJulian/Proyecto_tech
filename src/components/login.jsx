import './login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

    return(
        <>
        <form className='seccion' action="">
          <h1 className='login'>Login</h1>
          <input className='ing ing_usuario' type="text" placeholder='Ingrese su usario'/>
          <input className='ing ing_contraseña' type="password" placeholder='Ingrese su contraseña'/>
          <button onClick={() => navigate(`/interfaz`)} className='boton'>ENVIAR</button>
        </form>
        </> 
    )
}

export default Login