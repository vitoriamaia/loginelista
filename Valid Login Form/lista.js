function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(cliente){
    linha = document.createElement("div");

    tdId = document.createElement("h2");
    tdNome = document.createElement("td");
    tdCpf = document.createElement("td");
    tdLogradouro = document.createElement("td");
    tdCep = document.createElement("td");
    tdTelefone= document.createElement("td");


    tdId.innerHTML = cliente.id
    tdNome.innerHTML = cliente.nome
    tdCpf.innerHTML = cliente.cpf
    tdLogradouro.innerHTML = cliente.logradouro
    tdCep.innerHTML = cliente.cep
    tdTelefone.innerHTML = cliente.telefone
   

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdCpf);
    linha.appendChild(tdLogradouro);
    linha.appendChild(tdCep);
    linha.appendChild(tdTelefone);


    return linha;


}
function main(){
    let data= fazGet("http://localhost:8081/api/v1/clientes");
    let clientes = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    clientes.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}
main()