import './App.css';
import MovieTable from './components/MovieTable';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (
    <div className='App '>
      <Header />
      <div className='d-flex container main-section'>
        <MovieTable />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
