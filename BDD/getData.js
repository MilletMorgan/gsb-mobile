export function getTypesFromBdd() {
    return fetch('http://localhost:3000/get-type', {
        mode: 'cors'
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}