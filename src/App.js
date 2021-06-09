import './App.css';
import MovieTable from './components/movieTable';
import Header from './components/header';
import Footer from './components/footer';
import Aside from './components/aside';

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
