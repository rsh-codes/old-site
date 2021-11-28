import React from 'react';

import Table from './Table';
import data from '../../data/github';

const stats = () => (
  <div>
    <Table
      data={data}
    />
  </div>
);

export default stats;
