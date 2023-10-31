import './App.css';
import Home from './Home';
import NavComponent from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './First';
import Footer from './Footer';

function App() {
  return (
    <div>
       <First />
 <NavComponent /> 
 <Home/>
   <Footer/>
    </div>
  );
}
export default App;