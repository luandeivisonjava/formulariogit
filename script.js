const localStorageKey = "lista";

function validacao(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const inputValor = document.getElementById('input-add-item').value;
    let existe = values.find(x => x.name == inputValor)
    return !existe ? false : true;
}
function novaTarefa(){
    const input = document.getElementById('input-add-item');
    input.style.border = '';

    if(!input.value){
        input.style.border = '1px solid red';
        alert("Digite alguma tarefa para inserir em sua lista!");
    }else if(validacao()){
        alert('Ja existe essa tarefa em sua lista!!!');
    } else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageKey,JSON.stringify(values));
        exibirTarefa();
    }
    input.value="";
}
function exibirTarefa(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let lista = document.getElementById('content-list');
    lista.innerHTML="";

    for(let i = 0; i < values.length; i++){
        lista.innerHTML += `<li>${values[i]['name']}<button onclick='removeItem("${values[i]['name']}")'>Ok</button></li>`
    }
}
function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1);
    localStorage.setItem(localStorageKey,JSON.stringify(values));
    exibirTarefa();
}
exibirTarefa();