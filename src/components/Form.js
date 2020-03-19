import React from 'react';
import SITUATIONS from '../config/situations';

const Form = (props) => {

	const handleSubmit = (ev) => {
		ev.preventDefault()

		props.callback({
			name:      ev.target.name.value,
			birth:     ev.target.birth.value,
			address:   ev.target.address.value,
			city:      ev.target.city.value,
			situation: ev.target.situation.value,
		})
	}

	return (
		<div className='container d-flex flex-column justify-content-center'>
			<form className='needs-validation text-center' onSubmit={ handleSubmit } novalidate>

				<br />
				<p className='h4 mb-4'>Attestation de déplacement dérogatoire</p>

				<input type='text' id='name'    className='form-control mb-2' placeholder='Nom'               required/>
				<input type='text' id='birth'   className='form-control mb-2' placeholder='Date de naissance' required/>
				<input type='text' id='address' className='form-control mb-2' placeholder='Adresse'           required/>
				<input type='text' id='city'    className='form-control mb-2' placeholder='Ville'             required/>

				<select id='situation' className='browser-default custom-select mb-4' defaultValue='' required>
					<option value='' disabled>Votre situation</option>
					{ SITUATIONS.map((descr, i) => <option value={ i } key={ i }>{ descr.short }</option>) }
				</select>

				<span id='signature-pad'>
					<canvas></canvas>
					<a href='#' className='fas fa-trash-alt text-muted' onClick={ props.clear }/>
				</span>

				<p className='text-justify my-4'>
					Ce formulaire est là pour vous aider dans la production de vos documents, mais il ne vous dispense en aucun cas d'appliquer les directives en vigueur. Les forces de l'ordre sont seules à même de juger de la légitimité de vos déplacements. <strong>Soyez raisonnables, restez chez vous dans la mesure du possible, ne sortez qu'en cas d'absolue nécessité et lavez-vous les mains régulièrement</strong>.
				</p>

				<p className='text-justify my-4'>
					<small>Cette application est respectueuse de votre vie privée : les informations que vous indiquez restent sur votre appareil. Le code source est <a href="">disponible sur Github</a> et la présente version est stockée sur IPFS. Vous pouvez (1) <a href = "https://app.ens.domains/name/sortir.eth">vérifier à cette page</a> (section "CONTENT") que le nom de domaine "sortir.eth" (https://sortir.eth.link) redirige effectivement vers l'emprunte numérique de l'application, et (2) en vérifier le contenu au pixel près.</small>
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

export default Form;
