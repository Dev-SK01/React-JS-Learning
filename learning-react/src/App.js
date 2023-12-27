import { Header } from './Header.js';
import { Content } from './Content.js';
import { Footer } from './Footer.js';
import './App.css';

function App() {

  return (
    <div className='App'>
      {/* calling the other components */}
     <Header />
     <Content />
    </div>
  );
}



export {App};
