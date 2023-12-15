import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="sign">
      <div className="box">
        <h3>Pon tus datos de inicio</h3>
        <input type="email" placeholder="Tu email"/>
        <input type="password" placeholder="Tu contraseña"/>
        <button>Iniciar sesion</button>
      </div>
      <p>¿No tienes cuenta? <Link to="/sign-up">Crear cuenta</Link>.</p>
    </div>
  )
}

export default SignIn