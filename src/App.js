import React from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const signature = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Signature_of_Professor_Muhammad_Yunus.svg';

const SITUATIONS = [
	<p>déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle, lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés;</p>,
	<p>déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur <a href='https://www.gouvernement.fr/' _target='_blank'>gouvernement.fr</a>);</p>,
	<p>déplacements pour motif de santé;</p>,
	<p>déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou la garde d’enfants;</p>,
	<p>déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle des personnes, à l’exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie.</p>,
]

function today()
{
	let
	date  = new Date(),
	month = '' + (date.getMonth() + 1),
	day   = '' + date.getDate(),
	year  = date.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length   < 2) day   = '0' + day;

	return [day, month, year].join('/');
}

function App() {

	const [state, setState] = React.useState(null);

	const handleSubmit = (ev) => {
		ev.preventDefault()
		console.log(typeof ev.target.situation.value)
		setState({
			name:      ev.target.name.value,
			birth:     ev.target.birth.value,
			address:   ev.target.address.value,
			city:      ev.target.city.value,
			situation: Number(ev.target.situation.value),
		})
	}

	return (
		state
		?
			<div className='container d-flex flex-column justify-content-center'>

				<h2 className='text-center'>
					Attestation de déplacement dérogatoire
				</h2>

				<p className='text-justify m-3'>
					En application de l’article 1<sup>er</sup> du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus SARS-CoV-2&nbsp;:
				</p>

				<table className='m-3'>
					<tbody>
					<tr>
						<td>Je soussigné(e)</td>
					</tr>
					<tr>
						<td>Mme / M.</td>
						<td>{state.name}</td>
					</tr>
					<tr>
						<td>Né(e) le&nbsp;:</td>
						<td>{state.birth}</td>
					</tr>
					<tr>
						<td>Demeurant&nbsp;:</td>
						<td>{state.address}</td>
					</tr>
					</tbody>
				</table>

				<p className='text-justify m-3'>
					certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l’article 1<sup>er</sup> du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus SARS-CoV-2&nbsp;:
				</p>

				<div className='m-3'>
					{
						SITUATIONS.map((descr, i) =>
							<div className='form-check' key={i}>
								<input className='form-check-input' type='checkbox' readOnly checked={state.situation === i} />
								<label className='form-check-label'>
									{descr}
								</label>
							</div>
						)
					}
				</div>

				<p className='text-right'>
					Fait à {state.city}, le {today()}
				</p>

				<div className='text-right'>
					<img height='80vh' src={signature} alt='signature'/>
				</div>

			</div>
		:
			<div className='container d-flex flex-column justify-content-center'>
				<form className='needs-validation text-center' onSubmit={ handleSubmit } novalidate>

					<p className='h4 mb-4'>Attestation de déplacement dérogatoire</p>

					<input type='text' id='name'    className='form-control mb-2' placeholder='Nom'               required/>
					<input type='text' id='birth'   className='form-control mb-2' placeholder='Date de naissance' required/>
					<input type='text' id='address' className='form-control mb-2' placeholder='Adresse'           required/>
					<input type='text' id='city'    className='form-control mb-2' placeholder='Ville'             required/>

					<select id='situation' className='browser-default custom-select mb-4' defaultValue='' required>
						<option value='' disabled>Votre situation</option>
						<option value='0'>Activité professionnelle</option>
						<option value='1'>Achats</option>
						<option value='2'>Motif santé</option>
						<option value='3'>Motif familial</option>
						<option value='4'>Déplacements brefs</option>
					</select>

					<p className='text-justify my-4'>
						Ce formulaire est là pour vous aider dans la production de vos documents, mais il ne vous dispense en aucun cas d'appliquer les directives en vigueur. Les forces de l'ordre sont seules à même de juger de la légitimité de vos déplacements. Soyez raisonnables, restez chez vous dans la mesure du possible, ne sortez qu'en cas d'absolue nécessité et lavez-vous les mains régulièrement.
					</p>

					<div className='form-check my-4'>
						<input className='form-check-input' type='checkbox' value='' id='signature' required/>
						<label className='form-check-label' htmlFor='signature'>
							J'ai compris
						</label>
					</div>

					<button className='btn btn-primary btn-block my-3' type='submit'>Soumettre</button>

				</form>
			</div>
	);
}

export default App;
