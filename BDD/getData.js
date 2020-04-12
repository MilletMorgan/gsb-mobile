export function getTypesFromBdd() {
    return fetch('http://5d71cc7d.ngrok.io/get-type', {
        mode: 'cors'
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}