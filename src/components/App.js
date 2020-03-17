import React from 'react';
import Form  from './Form';
import View  from './View';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
	const [state, setState] = React.useState(null);
	return state ? View(state) : Form(setState);
}

export default App;
