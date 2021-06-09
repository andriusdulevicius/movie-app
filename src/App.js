import './App.css';
import MovieTable from './components/MovieTable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <MovieTable />
      <Footer />
    </div>
  );
}

export default App;
