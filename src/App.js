import Image from './components/Image';
import './App.css';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <div className='App_container'>
      <Image/>
      <MainComponent/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
