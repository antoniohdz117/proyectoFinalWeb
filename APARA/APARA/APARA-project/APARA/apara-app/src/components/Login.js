import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UsuarioDashboard from './UsuarioDashboard';

const categorias = [
  'Procesadores',
  'Tarjetas Madre',
  'Tarjetas Gráficas',
  'Fuentes de Poder',
  'Memoria RAM',
  'Periféricos',
];

const marcas = ['Intel', 'AMD', 'NVIDIA', 'ASUS'];

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Login() {
  const navigate = useNavigate();

  const [showMarcas, setShowMarcas] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');

  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  const [showRegistroForm, setShowRegistroForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerApellidoPaterno, setRegisterApellidoPaterno] = useState('');
  const [registerApellidoMaterno, setRegisterApellidoMaterno] = useState('');
  const [registerNacimiento, setRegisterNacimiento] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const mockUser = {
    email: 'usuario@ejemplo.com',
    password: '123456',
    username: 'Juan Pérez',
  };

  const seleccionarCategoria = (categoria) => {
    navigate(`/productos?categoria=${encodeURIComponent(categoria)}`);
    setShowCategorias(false);
  };

  const seleccionarMarca = (marca) => {
    navigate(`/productos?marca=${encodeURIComponent(marca.toLowerCase())}`);
    setShowMarcas(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isBlocked) return;

    if (!isValidEmail(loginEmail)) {
      setLoginError('Formato de correo electrónico inválido');
      return;
    }

    if (loginEmail === mockUser.email && loginPassword === mockUser.password) {
      setLoggedInUser(mockUser.username);
      setLoginError('');
      setLoginAttempts(0);
      setShowLoginForm(false);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        setIsBlocked(true);
        setLoginError(
            `Demasiados intentos. Se ha enviado un correo a ${loginEmail || '[correo]'} para restablecer la contraseña.`
        );
        setTimeout(() => {
          setIsBlocked(false);
          setLoginAttempts(0);
          setLoginError('');
        }, 5000);
      } else {
        setLoginError('Correo electrónico o contraseña incorrectos');
      }

      setLoggedInUser('');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
        !registerEmail ||
        !registerPassword ||
        !registerUsername ||
        !registerName ||
        !registerApellidoPaterno ||
        !registerNacimiento
    ) {
      setRegisterError('Todos los campos excepto Apellido Materno son obligatorios');
      return;
    }

    if (!isValidEmail(registerEmail)) {
      setRegisterError('Formato de correo electrónico inválido');
      return;
    }

    setRegisterError('');
    setRegisterSuccess(true);

    setTimeout(() => {
      setShowRegistroForm(false);
      setRegisterSuccess(false);
      setRegisterEmail('');
      setRegisterPassword('');
      setRegisterUsername('');
      setRegisterName('');
      setRegisterApellidoPaterno('');
      setRegisterApellidoMaterno('');
      setRegisterNacimiento('');
    }, 2000);
  };

  useEffect(() => {
    if (!isBlocked && loginError.includes('Demasiados intentos')) {
      setLoginError('');
    }
  }, [isBlocked]);

  return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center">
        <header className="bg-blue-900 text-white flex justify-between items-center px-6 py-4 w-full relative">
          <div className="text-xl font-bold">🅱️</div>
          <div className="flex space-x-4 relative">
            <div
                onMouseEnter={() => setShowMarcas(true)}
                onMouseLeave={() => setShowMarcas(false)}
                className="relative"
            >
              <button className="bg-blue-900 text-white rounded px-4 py-1 z-10">Marcas</button>
              {showMarcas && (
                  <ul className="absolute top-full mt-1 left-0 bg-white text-blue-900 shadow-lg rounded z-20 w-40">
                    {marcas.map((marca) => (
                        <li
                            key={marca}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => seleccionarMarca(marca)}
                        >
                          {marca}
                        </li>
                    ))}
                  </ul>
              )}
            </div>

            <div
                onMouseEnter={() => setShowCategorias(true)}
                onMouseLeave={() => setShowCategorias(false)}
                className="relative"
            >
              <button className="bg-blue-900 text-white rounded px-4 py-1 z-10">Categorías</button>
              {showCategorias && (
                  <ul className="absolute top-full mt-1 left-0 bg-white text-blue-900 shadow-lg rounded z-20 w-56">
                    {categorias.map((categoria) => (
                        <li
                            key={categoria}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => seleccionarCategoria(categoria)}
                        >
                          {categoria}
                        </li>
                    ))}
                  </ul>
              )}
            </div>

            <button className="font-bold">Contact</button>
            <button
                onClick={() => navigate('/productos')}
                className="bg-blue-900 text-white rounded px-4 py-1 hover:bg-blue-800"
            >
              Ver productos
            </button>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">A.P.A.R.A</h1>

          {loggedInUser && (
              <>
                <p className="mb-4 text-green-600 text-lg font-semibold">
                  Bienvenido, {loggedInUser} 👋
                </p>
                <UsuarioDashboard user={loggedInUser} />
              </>
          )}

          {!loggedInUser && (
              <div className="space-x-4">
                <button
                    className="px-6 py-2 border border-blue-900 text-blue-900 rounded hover:bg-blue-100"
                    onClick={() => {
                      setShowLoginForm(true);
                      setShowRegistroForm(false);
                    }}
                >
                  Login
                </button>
                <button
                    className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
                    onClick={() => {
                      setShowRegistroForm(true);
                      setShowLoginForm(false);
                    }}
                >
                  Crear Cuenta
                </button>
              </div>
          )}

          {showLoginForm && (
              <div className="mt-8 bg-white border border-blue-900 rounded p-6 shadow-md w-80">
                <h2 className="text-xl font-bold mb-4 text-blue-900">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                  <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full mb-3 p-2 border rounded"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      disabled={isBlocked}
                  />
                  <input
                      type="password"
                      placeholder="Contraseña"
                      className="w-full mb-4 p-2 border rounded"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      disabled={isBlocked}
                  />
                  {loginError && (
                      <p className={`text-sm mb-2 ${isBlocked ? 'text-orange-600' : 'text-red-600'}`}>
                        {loginError}
                      </p>
                  )}
                  <button
                      type="submit"
                      className={`w-full py-2 rounded text-white ${
                          isBlocked ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-800'
                      }`}
                      disabled={isBlocked}
                  >
                    Entrar
                  </button>
                </form>
              </div>
          )}

          {showRegistroForm && (
              <div className="mt-8 bg-white border border-blue-900 rounded p-6 shadow-md w-96 text-left">
                <h2 className="text-xl font-bold mb-4 text-blue-900">Crear Cuenta</h2>
                <form onSubmit={handleRegister}>
                  <input
                      type="email"
                      placeholder="Correo electrónico"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                  <input
                      type="password"
                      placeholder="Contraseña"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Nombre de usuario"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Apellido Paterno"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerApellidoPaterno}
                      onChange={(e) => setRegisterApellidoPaterno(e.target.value)}
                  />
                  <input
                      type="text"
                      placeholder="Apellido Materno (opcional)"
                      className="w-full mb-3 p-2 border rounded"
                      value={registerApellidoMaterno}
                      onChange={(e) => setRegisterApellidoMaterno(e.target.value)}
                  />
                  <input
                      type="date"
                      placeholder="Fecha de nacimiento"
                      className="w-full mb-4 p-2 border rounded"
                      value={registerNacimiento}
                      onChange={(e) => setRegisterNacimiento(e.target.value)}
                  />

                  {registerError && <p className="text-red-600 mb-2">{registerError}</p>}
                  {registerSuccess && <p className="text-green-600 mb-2">Registro exitoso!</p>}

                  <button
                      type="submit"
                      className="w-full py-2 rounded bg-blue-900 text-white hover:bg-blue-800"
                  >
                    Registrar
                  </button>
                </form>
              </div>
          )}
        </main>
      </div>
  );
}

export default Login;
