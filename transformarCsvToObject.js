/* 
Entrada:
Nome;Idade;Email
Carlos;30;carlos@exemplo.com.br
Eduardo;20;
;;;

Saída:
[
    {nome: Carlos, idade: 30, email: carlos@exemplo.com.br},
    {nome: Eduardo, idade: s0, email: ""}
]
*/ 

let fileReader = new FileReader();     
let dadosFormatados;

const formatarDados = (data) => {
    let linhas = ( data.target.result ).split('\n')
    let keys = linhas.shift().split(";")

    const removeLinhasEmBranco = (linha) => linha.replace(/\s|;/g, '') 
    linhas = linhas.filter(removeLinhasEmBranco)
    
    const linhaToObject = (newLine, valor, index) => Object.defineProperty(newLine, keys[index], {value: valor})
    const linhaToArray = (linha) => linha.split(";").reduce(linhaToObject, {})

    dadosFormatados = linhas.map(linhaToArray)
}

fileReader.onload = formatarDados                     
fileReader.addEventListener("load", () => alert("Arquivo carregado com sucesso!") ) // "progress" / "error" / "abort" / "load"
fileReader.readAsText($("#upload__input")[0].files[0], 'ISO-8859-1');  