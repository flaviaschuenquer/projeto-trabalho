import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const Records = () => (
    <div className="page-container">
      <div className="filters-container records-actions">

        <Link to="/charts">
          <button className="action-filters">
            VER NOTÍCIA
          </button>
        </Link>

      </div>
      <table className="records-table" cellPadding="0" cellSpacing="0">

      <thead>
        <tr>
          <th> Educação</th>
          <th>  Ciência</th>  
          <th> Economia </th>
          <th> Esportes</th>
          <th> Culinária</th>
        </tr>
      </thead>
      <tbody>
        <td>Prova ENEM</td>
        <td>Vacina Covid</td>
        <td>Crie sua empresa</td>
        <td>FLU no G20</td>
        <td>Receita NATAL</td>  
      </tbody>

      <thead>
        <tr>
          <th> Cinema</th>
          <th> Novelas </th>  
          <th> Resenha </th>
          <th> Dúvidas</th>
          <th> Opniões</th>
        </tr>
      </thead>

      <tbody>
        
        <td> Novidade para 2021</td>
        <td> Resumo</td>
        <td> Resenha de fds</td>
        <td> Dúvida de usuários</td>
        <td> Sobre a página</td>
        
      </tbody>
      </table>
    </div>

);

export default Records;