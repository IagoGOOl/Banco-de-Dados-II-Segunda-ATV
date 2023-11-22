const baseURL = 'http://localhost:3000'
let ocorrencias = []

function carregarocorrencias() {
    fetch(`${baseURL}/ocorrencia`).then(response => response.json())
        .then(json => {
            ocorrencias = json
            rederizarNaTela()
        })
        .catch(err => false)
}

function rederizarNaTela() {
    const div = document.querySelector(".container")
    div.innerHTML = ''
    if (ocorrencias.length) {
        ocorrencias.forEach(ocorrencias => {
            const {
                id,
                titulo,
            } = ocorrencias

            const html = `
            <div>
            <p>${titulo}</p>
            <p>${Id}</p>
            <div>
            <button class= "btn btn-warning"> Editar <button>
            <button class="btn btn-danger"> Excluir<button>
            </div>
            </div>
           

       `
            div.innerHTML += html

        }

        )
    }

    else {
        div.innerHTML = `
        <h3>nenhuma ocorrencia cadastrada</h3>`
    }
}