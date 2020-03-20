import React       from 'react';
import LocalForage from 'localforage';
import Form        from './Form';
import View        from './View';

import SignaturePad from 'signature_pad';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const App = () => {
	const [ state,     setState     ] = React.useState(null);
	const [ signature, setSignature ] = React.useState(null);

	// handlers
	const handleSubmit = (data) => {
		LocalForage.setItem('0x953779c43301b023-data', data);
		LocalForage.setItem('0x953779c43301b023-sign', signature.toDataURL());
		setState(data);
	}

	const handleClear = () => {
		signature.clear()
	}

	React.useEffect(() => {
		const sigpad = new SignaturePad(document.querySelector('canvas'));
		// load cache
		LocalForage.getItem('0x953779c43301b023-data', (value, err) => (err ? null : value)).then(data => {
			document.getElementById('name'     ).value = data.name;
			document.getElementById('birth'    ).value = data.birth;
			document.getElementById('address'  ).value = data.address;
			document.getElementById('city'     ).value = data.city;
			document.getElementById('situation').value = data.situation;
		})
		LocalForage.getItem('0x953779c43301b023-sign', (value, err) => (err ? null : value)).then(data => {
			sigpad.fromDataURL(data)
		})
		// store signature pad
		setSignature(sigpad)
	}, []);

	return state
	?
		View({
			...state,
			sign: signature.toDataURL()
		})
	:
		Form({
			callback: handleSubmit,
			clear:    handleClear,
		});
}

export default App;
