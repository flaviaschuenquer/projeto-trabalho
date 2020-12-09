import React from 'react';
import './styles.css';
import { Link} from 'react-router-dom';


const Home = () => (
  <div className="home-container">
    <div className='home-text'>
      <h1 className="home-text-title">
        Fique por dentro das notícias
      </h1>
      <h2>
        Clique no botão abaixo e faça seu login
      </h2>

      <Link to="/records">
       <div className="home-actions">
        <button className="home-btn">
          Quero fazer meu login
        </button>
        
       </div>
      </Link>
    </div>
    
  </div>

);

export default Home;