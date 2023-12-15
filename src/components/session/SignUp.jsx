import "./sign.css"

import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="sign">
        <div className="box">
            <h3>Crea tu cuenta</h3>
            <input type="text" placeholder="Tu nombre" />
            <input type="email" placeholder="Tu email" />
            <input type="password" placeholder="Tu contraseña" />
            <input type="password" placeholder="Confirmar contraseña" />
            <button>Crear cuenta</button>
        </div>
        <p>¿Ya tienes cuenta? <Link to="/sign-in">Iniciar sesión</Link>.</p>
    </div>
  )
}

export default SignUp