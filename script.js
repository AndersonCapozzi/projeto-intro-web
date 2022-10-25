//Exercicio 1/3 projeto intro-web
 const brasil = {
    nome: "Brasil",
    nomeCompleto:  "Confederação Brasileira de Futebol (C.B.F)",
titulos: 5,
jogador: "Jogador destaque: Neymar.",
ultimoTitulo: false,
adversariosCopa: ["Catar 2022 - Grupo G:, Suiça", "Sérvia", "Camarões"],
campeao2022: "Ultimo titulo - 2002 Korea do sul e Japão",
}

 const argentina = {
    nome: "Argentina",
    nomeCompleto: "Associção de Futebol Argentina (A.F.A)",
titulos: 2,
jogador: "Jogador destaque: Messi.",
ultimoTitulo: false,
adversariosCopa: 
["Catar 2022 - Grupo C:, Arábia Saudita, México, Polônia"],
campeao2022: "Ultimo titulo - 1986 México",
}

const franca = { 
    nome: "França",
    nomeCompleto:"Federação Francesa de Futebol (F.F.F)",
    titulos: 2,
    jogador: "Jogador destaque: Mbappé.",
    ultimoTitulo: true,
    adversariosCopa: ["Catar 2022 - Grupo D:, Austrália, Dinamarca, Tunísia"],
    campeao2022: "Ultimo titulo - 2018 Russia"
}


let somaTitulos = brasil.titulos+argentina.titulos+franca.titulos/3

console.log(somaTitulos, "É a média de titulos das 3 seleções!")
let ultimoCampeao = brasil.ultimoTitulo && argentina.ultimoTitulo && franca.ultimoTitulo
console.log(ultimoCampeao);

//Semana 2:

console.log("Fase de grupos Catar 2022");
console.log(brasil.adversariosCopa);
console.log(argentina.adversariosCopa);
console.log(franca.adversariosCopa);

//console.log(selecao1, "Titulos", titulosBrasil, jogadorBrasil, "Campeão em 2018?",
// ultimoCampBr, adversariosBrasil22);

console.log("Titulos", "Brasil:", brasil.titulos, "Argentina:", argentina.titulos,
"França:", franca.titulos);

//console.log(selecao3, "Titulos", titulosFranca, jogadorFranca, "Campeão em 2018?", 
//ultimoCampFr, adversariosFranca22);


//let bioBrasil = [brasil, "Conquistas:", titulos, jogador, "Venceu ultima copa?",
//ultimoTitulo, adversariosCopa.toString()];
//console.log(bioBrasil);

//let bioArgentina = [argentina, "Conquistas:", titulos, jogador, 
//"Venceu ultima copa?", ultimoTitulo, adversariosCopa.toString()];
//console.log(bioArgentina);

//let bioFranca = [franca, "conquistas:", ultimoTitulo, jogador, "Venceu ultima copa?",
//ultimoTitulo, adversariosCopa.toString()];
//console.log(bioFranca);

//Semana 3 & 4
let selecoesCopa = [] 
if(brasil.ultimoTitulo===true){
    selecoesCopa.push(brasil)
}else{
    // alert("Item não adicionado!")
}
console.log(selecoesCopa);
if(argentina.ultimoTitulo===true){
    selecoesCopa.push(argentina)
}else{
    // alert("Item não adicionado!!")
}
if(franca.ultimoTitulo===true){
    selecoesCopa.push(franca)
}else{
    // alert("Item não adicionado!!")
}

// Semana 5 

let selecoesCopa2 = []
selecoesCopa2.push(brasil, argentina, franca)
for(i=0; i<selecoesCopa2.length; i++){
    selecoesCopa2[i].nome = selecoesCopa2[i].nome
    for(j=0; j<selecoesCopa2[i].adversariosCopa.length; j++){
        selecoesCopa2[i].adversariosCopa += `${""}`
    }
  console.log(selecoesCopa2[i])
}

// Semana 6
function chamarObjeto(objeto){
return objeto
}
console.log(chamarObjeto(brasil))

function chamarObjetoArray(array, string){
    let selecaoArray= array.filter((i)=>{
        return i.nome === string
    })
    if(selecaoArray.length===0){
        alert("Seleção não encontrada")
    }
    return selecaoArray
}
// console.log(chamarObjetoArray(selecoesCopa2, "frança"))

// Semana 7



//  console.log(selecoesCopa2);
   
// let adversariosString = selecoesCopa2.map(function(item, array){
//     return item.adversariosCopa.join()
// })
// console.log(adversariosString)
  


//for(let i = 0; i<=selecoesCopa.toString(); i++){
    
  
    //console.log(selecoesCopa)
//}

//for(i of selecoesCopa){
   // console.log([i])
//}
//Semana 6
//let stringSelecoes = selecoesCopa.toString()
// for(i in `${selecoesCopa.toString()}`) {
//     for(j in `${JSON.stringify(selecoesCopa)}`)
//     console.log(`${selecoesCopa}`)
// break
// }

function addSelecao(selecao)
{
const menu = document.getElementById("menuBrasil")
// const addLi = document.createElement("li")
const addLi2 = document.createElement("li")
const addLi3 = document.createElement("li")
const addLi4 = document.createElement("li")
// const addLi5 = document.createElement("li")
const addLi6 = document.createElement("li")
const addLi7 = document.createElement("li")
// const nome = document.createTextNode(selecao.nome)
const nomeC = document.createTextNode(selecao.nomeCompleto)
const nomeT = document.createTextNode(selecao.titulos)
const nomeJ = document.createTextNode(selecao.jogador)
// const nomeU = document.createTextNode(selecao.ultimoTitulo)
const nomeAd = document.createTextNode(selecao.adversariosCopa)
const nomeCamp = document.createTextNode(selecao.campeao2022)
// addLi.appendChild(nome)
addLi2.appendChild(nomeC)
addLi3.appendChild(nomeT)
addLi4.appendChild(nomeJ)
// addLi5.appendChild(nomeU)
addLi6.appendChild(nomeAd)
addLi7.appendChild(nomeCamp)
// menu.insertAdjacentElement("beforeend",addLi)
menu.insertAdjacentElement("beforeend",addLi2)
menu.insertAdjacentElement("beforeend",addLi3)
menu.insertAdjacentElement("beforeend",addLi4)
// menu.insertAdjacentElement("beforeend",addLi5)
menu.insertAdjacentElement("beforeend",addLi6)
menu.insertAdjacentElement("beforeend",addLi7)
}

addSelecao(brasil)

function addArgentina(selecao)
{
const menu = document.getElementById("menuArgentina")
// const addLi = document.createElement("li")
const addLi2 = document.createElement("li")
const addLi3 = document.createElement("li")
const addLi4 = document.createElement("li")
// const addLi5 = document.createElement("li")
const addLi6 = document.createElement("li")
const addLi7 = document.createElement("li")
const nome = document.createTextNode(selecao.nome)
const nomeC = document.createTextNode(selecao.nomeCompleto)
const nomeT = document.createTextNode(selecao.titulos)
const nomeJ = document.createTextNode(selecao.jogador)
// const nomeU = document.createTextNode(selecao.ultimoTitulo)
const nomeAd = document.createTextNode(selecao.adversariosCopa)
const nomeCamp = document.createTextNode(selecao.campeao2022)
// addLi.appendChild(nome)
addLi2.appendChild(nomeC)
addLi3.appendChild(nomeT)
addLi4.appendChild(nomeJ)
// addLi5.appendChild(nomeU)
addLi6.appendChild(nomeAd)
addLi7.appendChild(nomeCamp)
// menu.insertAdjacentElement("beforeend",addLi)
menu.insertAdjacentElement("beforeend",addLi2)
menu.insertAdjacentElement("beforeend",addLi3)
menu.insertAdjacentElement("beforeend",addLi4)
// menu.insertAdjacentElement("beforeend",addLi5)
menu.insertAdjacentElement("beforeend",addLi6)
menu.insertAdjacentElement("beforeend",addLi7)
}
addArgentina(argentina)

function addFranca(selecao)
{
const menu = document.getElementById("menuFranca")
// const addLi = document.createElement("li")
const addLi2 = document.createElement("li")
const addLi3 = document.createElement("li")
const addLi4 = document.createElement("li")
// const addLi5 = document.createElement("li")
const addLi6 = document.createElement("li")
const addLi7 = document.createElement("li")
// const nome = document.createTextNode(selecao.nome)
const nomeC = document.createTextNode(selecao.nomeCompleto)
const nomeT = document.createTextNode(selecao.titulos)
const nomeJ = document.createTextNode(selecao.jogador)
// const nomeU = document.createTextNode(selecao.ultimoTitulo)
const nomeAd = document.createTextNode(selecao.adversariosCopa)
const nomeCamp = document.createTextNode(selecao.campeao2022)
// addLi.appendChild(nome)
addLi2.appendChild(nomeC)
addLi3.appendChild(nomeT)
addLi4.appendChild(nomeJ)
// addLi5.appendChild(nomeU)
addLi6.appendChild(nomeAd)
addLi7.appendChild(nomeCamp)
// menu.insertAdjacentElement("beforeend",addLi)
menu.insertAdjacentElement("beforeend",addLi2)
menu.insertAdjacentElement("beforeend",addLi3)
menu.insertAdjacentElement("beforeend",addLi4)
// menu.insertAdjacentElement("beforeend",addLi5)
menu.insertAdjacentElement("beforeend",addLi6)
menu.insertAdjacentElement("beforeend",addLi7)
}


addFranca(franca)

// const menuBrasil=document.getElementById("menuBrasil")
// const menuArgentina=document.getElementById("menuArgentina")
// const menuFranca=document.getElementById("menuFranca")


function buscar(event){
    event.preventDefault()
    const input=document.getElementById("buscador")
    const textoInput=input.value
    const pais=document.getElementById("pais")
const menuArgentina=document.getElementById("Argentina")
const menuFranca=document.getElementById("Franca")
const menuBrasil=document.getElementById("Brasil")
const addLi = document.createElement("li")
//  pais.innerHTML=""
//  addLi.innerHTML="País não encontrado"
pais.insertAdjacentElement("beforeend", addLi)
const conteudo= chamarObjetoArray(selecoesCopa2, textoInput)
if(textoInput===brasil.nome){
// addLi.innerHTML= menuBrasil
menuArgentina.remove()
menuFranca.remove()
} else if(textoInput===argentina.nome){
    menuBrasil.remove()
    menuFranca.remove()
}
else if(textoInput===franca.nome){
    menuArgentina.remove()
    menuBrasil.remove()
}
 else{const addLi = document.createElement("li")
 pais.innerHTML=""
 addLi.innerHTML="País não encontrado"
 pais.insertAdjacentElement("beforeend", addLi)
 }
return
}
