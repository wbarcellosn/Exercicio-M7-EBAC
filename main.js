const btnNovoCadastro = document.getElementById('btn-novoCadastro');
const btnListar = document.getElementById('btn-listar');
const btnVoltar = document.getElementById('btn-voltar');
const linkVoltar = document.getElementById('link-voltar');
const formulario = document.getElementById('formulario');
const contato = [];
const telefone = [];
let linha = '';



btnNovoCadastro.addEventListener('click', (e) => {

    e.preventDefault();
    carregaCadastrar();
})

btnListar.addEventListener('click', (e) => {

    e.preventDefault();
    carregaLista();
})

btnVoltar.addEventListener('click', (e) => {

    e.preventDefault();
    voltaInicio();
})

linkVoltar.addEventListener('click', (e) => {

    e.preventDefault();
    voltaInicio();
})

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    adicionarContato();
    atualizarLista();
    carregaLista();
})


function carregaCadastrar() {

    document.getElementById('menu-inicial').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
}
function carregaLista() {

    document.getElementById('menu-inicial').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('lista').style.display = 'block';
    
}
function voltaInicio() {
    document.getElementById('lista').style.display = 'none';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('menu-inicial').style.display = 'block';
}
function adicionarContato() {

    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('tel-contato');

    if (telefone.includes(telContato.value)) {

        alert(`O número ${telContato.value} já está cadastrado.`)

    }

    else {

        contato.push(nomeContato.value);
        telefone.push(telContato.value)

        let dados = '<tr>';
        dados += `<td>${nomeContato.value}</td>`;
        dados += `<td>${telContato.value}</td>`;
        dados += '</tr>';

        linha += dados;
    }

    nomeContato.value = '';
    telContato.value = '';
}
function atualizarLista() {
    const lista = document.querySelector('tbody');
    lista.innerHTML = linha; 
}