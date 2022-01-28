import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { Link } from 'react-router-dom';

const TesteComp = (props: any) => {
  return (
    <div>
      <h1>Página Teste</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Teste</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TesteComp;