import Axios from "axios";

const url = 'http://a146052e.ngrok.io';

export function getTypesFromBdd() {
	// return Axios({
	// 	method: "GET",
	// 	url: url + '/get-type',
	// 	mode: 'cors',
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// }).then((response) => response.json())
	// 	.catch((error) => console.log(error))

	return fetch(url + '/get-type', {
		mode: 'cors'
	})
		.then((response) => response.json())
		.catch((error) => console.log(error))
}

export function postTypesToBdd(TextInputLabel, TextInputMontant) {
	return fetch(url + '/post-type', {
		method: 'POST',
		mode: 'no-cors',
		body: "label=" + TextInputLabel + "&montant=" + TextInputMontant,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	})
		.then(response => {
			console.log(JSON.stringify(response, null, 4));
			alert("La requête à bien été envoyée.");
			return response.text()
		})
		.catch((error) => {
			console.error(error)
		});
}