const controle = document.querySelectorAll("[data-controle]")
	// busca todos elementos marcados pela data-atributtes data-controle
	
const estatistica = document.querySelectorAll("[data-estatistica]")
	// busca todos elementos marcados pelo data-atributtes data-controle
	
//Abaixo temos objetos em lista de valores que serão somados às características do robô
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
	console.log(elemento)//lista todos botões contidos em controle
    elemento.addEventListener('click', (evento) => {
		console.log(evento)//mostra todas informações contidas no botão clicado
        manipulaDados(evento.target.textContent, evento.target.parentNode)
		//no html corresponde ao "-" ou o "+"  || correspode a todo elemento pai 
		//(no caso enviado para a função manipulaDados)
		
        atualizaEstatistica(evento.target.dataset.peca)
		//envia para a função apenas o dado contido no caminho especificado, 
		//esse caminho chega até o nome da peça que é enviado
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
		//recebido o elemento pai, busca dentro dele a linha html com o data-contador

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
		//altera o valor do value do elemento || parseInt converte String em número para efetuar o cálculo
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
	//forEach percorre todos elementos contidos na variável estatistica efetuando o cálculo de cada atributo
		console.log(elemento)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
	;//texto visível do elemento no html = texto convertido em string + 
			//variável pecas/nomeDaPecaRecebidoNaFuncao/nome do elemento contido no data-estatistica do html
    })
}