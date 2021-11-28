import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/stats/Personal';
import Site from '../components/stats/Site';

const stats = () => (
  <Main>
    <Helmet title="stats" />
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Blog</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default stats;
