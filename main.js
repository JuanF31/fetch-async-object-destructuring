const promise = fetch('https://rickandmortyapi.com/api/characte')
.then(r => r.json())
.then(data => {
    console.log('in async')
    return data
}).catch(error =>  error)

let search = document.querySelector('#search')
search.onkeyup = async() => {
    let loader = `<div class="spinner-border d-flex justify-content-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>`
    document.querySelector('#spinner').innerHTML = loader
    let data = await promise
    const { results } = data
    if(results){
        let html = ''
        results.forEach(element => {
            const { name, status, species, gender } = element
            html += `Nombre: ${name} | Estatus: ${status} | Especie: ${species} | Genero: ${gender} <br>`
        })
        document.querySelector('#spinner').innerHTML = html
    }else{
        const { error } = data
        document.querySelector('#spinner').innerHTML = `ERROR: ${error}`
    }
}

// let search = document.querySelector('#search')
// const api = () => {
//     let loader = `<div class="spinner-border d-flex justify-content-center" role="status">
//                     <span class="visually-hidden">Loading...</span>
//                 </div>`
//     document.querySelector('#spinner').innerHTML = loader
//     fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then( ( data ) => {
//         let html = ''
//         const { results } = data
//         results.forEach( (i) => {
//             const { name } = i
//             html += `<p>${name}</p><br>`
//         })
//         document.querySelector('#spinner').innerHTML = html
//     }).catch(error => {
//         document.querySelector('#spinner').innerHTML = error
//     })
// }
// search.onkeyup = ( e ) => api()