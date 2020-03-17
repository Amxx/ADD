import React from 'react';

import SITUATIONS from '../config/situations';

const today = () => {
	let
	date  = new Date(),
	month = '' + (date.getMonth() + 1),
	day   = '' + date.getDate(),
	year  = date.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length   < 2) day   = '0' + day;

	return [day, month, year].join('/');
}

const View = (state, signature) =>
	<div className='container d-flex flex-column justify-content-center'>
		<h2 className='text-center'>Attestation de déplacement dérogatoire</h2>
		<p className='text-justify m-3'>En application de l’article 1<sup>er</sup> du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus SARS-CoV-2&nbsp;:</p>
		<table className='m-3'><tbody>
			<tr><td>Je soussigné(e) </td></tr>
			<tr><td>Mme / M.        </td><td>{ state.name    }</td></tr>
			<tr><td>Né(e) le&nbsp;: </td><td>{ state.birth   }</td></tr>
			<tr><td>Demeurant&nbsp;:</td><td>{ state.address }</td></tr>
		</tbody></table>
		<p className='text-justify m-3'>certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l’article 1<sup>er</sup> du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus SARS-CoV-2&nbsp;:</p>
		<div className='m-3'>
			{
				SITUATIONS.map((descr, i) =>
					<div className='form-check' key={ i }>
						<input className='form-check-input' type='checkbox' readOnly checked={ state.situation === i } />
						<label className='form-check-label'>
							{ descr.full }
						</label>
					</div>
				)
			}
		</div>
		<p className='text-right'>Fait à { state.city }, le { today() }</p>
		<div className='text-right'><img height='80vh' src={ signature } alt='signature'/></div>
	</div>;

export default View;
