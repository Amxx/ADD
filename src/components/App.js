import React from 'react';
import Form  from './Form';
import View  from './View';

import SignaturePad from 'signature_pad';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
	const [ state,     setState     ] = React.useState(null);
	const [ signature, setSignature ] = React.useState(null);

	React.useEffect(() => {
		setSignature(new SignaturePad(document.querySelector('canvas')))
	}, []);

	return state ? View(state, signature.toDataURL()) : Form(setState);
}

export default App;
