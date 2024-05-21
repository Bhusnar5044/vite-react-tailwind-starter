import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '@/layout';
import Routings from '@/router/Routings';

const App = () => (
  <Router>
    <Layout>
      <Routings />
    </Layout>
  </Router>
);

export default App;
