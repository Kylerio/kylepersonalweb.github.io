import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skill />


    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
