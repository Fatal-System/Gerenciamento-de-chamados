import { useState, useEffect } from 'react';
import '../Style.css'
import logo from '../assets/logo.png'
import { FaRegUser, FaSpinner } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js"

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgetPassword, setForgetPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const authError = sessionStorage.getItem('authError')
    if (authError) {
      setError(authError)
      sessionStorage.removeItem('authError')
    }
  }, [])

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    setForgetPassword("");

    try {
      const response = await api.post("/login", { login, password })

      if (response.data.success) {
        const user = response.data.user;
        const token = response.data.token;
        if (token) { localStorage.setItem('token', token) }

        if (user.FuncaoUsuario === "Admin") {
          navigate("/admin-home", { state: { user } });
        } else if (user.FuncaoUsuario === "Tecnico") {
          navigate("/tec-home", { state: { user } });
        } else {
          navigate("/home", { state: { user } });
        }
      } else {
        setError(response.data.message || "Falha na autenticação. Tente novamente.");
      }
    } catch (err) {
      let errorMessage = "Erro inesperado. Tente novamente.";

      if (err.response) {
        const status = err.response.status;

        if (status === 401 || status === 403) {
          errorMessage = "Usuário ou senha inválidos!";
        } else if (status === 404) {
          errorMessage = "Erro de conexão: Rota da API não encontrada (404).";
        } else if (status >= 500) {
          errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
        } else {
          errorMessage = err.response.data.message || `Erro ${status} desconhecido.`;
        }

      } else if (err.request) {
        errorMessage = "Falha de conexão com o servidor, espere um momento e tente novamente.";
      } else {
        errorMessage = "Erro ao processar a requisição de login.";
      }

      setError(errorMessage);
      setLogin("");
      setPassword("");
      setTimeout(() => setError(""), 4000);
    } finally {
      setIsLoading(false);
    }
  }

  const textForgetPassword = () => {
    setForgetPassword("Entre em contato com o administrador para recuperar a senha")
    setTimeout(() => setForgetPassword(""), 2000);
  }

  return (
    <main className='login'>
      <figure>
        <img src={logo} alt="logo Fatal-System" className='logo-login' />
      </figure>
      
      <section className="box-login">
        <h1 className='text-login'>Login</h1>
        <div className='form'>

          <div className='inputs'>
            <FaRegUser className='icons' />
            <input
              className='input-login'
              name='login'
              type="text"
              placeholder='Usuário'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <div className='inputs'>
            <TbLockPassword className='icons' />
            <input
              className='input-login'
              name='password'
              type="password"
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
            />
          </div>

          {error && <p className="notice">{error}</p>}
          {forgetPassword && <p className='notice'>{forgetPassword}</p>}

          <button className='forget-password' onClick={textForgetPassword}>
            Esqueceu a senha?
          </button>

          <div className='button-how-to-use'>
            <button
              className='how-to-use'
              type='button'
              onClick={() => navigate('/how-to-use')}
            >
              Como usar
            </button>
          </div>

          <div className='button-enter'>
            <button
              className='enter'
              type='submit'
              onClick={handleLogin}
              disabled={isLoading}>
              {isLoading ? <FaSpinner className="spinner" /> : 'Entrar'}

            </button>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Login