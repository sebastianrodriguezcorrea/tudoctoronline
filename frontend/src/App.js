import Login from './pages/auth/login';

//Estilos
import './App.css';
import Home from './pages/admin/home';

function App() {

  const titulo =
    <div>
      <h1 style={{color:"red", fontFamily:'cursive'}}>Tu doctor online</h1>
      <p>Bienvenido al software especializado en el tratamiento de tu salud</p>
    </div>

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
