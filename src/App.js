import './App.css';
import Routes from './Routes';
import Global from './styles/global';
import Header from './components/Header/Header';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <div className="content-container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
