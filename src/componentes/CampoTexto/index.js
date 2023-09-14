import "./CampoTexto.css"

// Guardando uma função dentro de uma variavel constante
//Importante começar com letra maiuscula
// utilizamos arrow function

// Apenas uma forma diferente de escrever aquela function

// esta variavel ja armazena todas aquelas linhas de codigo
const CampoTexto = ()=>{
return (
    // continuamos criando o form normalmente

<div className="campo-texto">
    <label>Nome</label>
    <input placeholder="Digite seu nome"/>
</div>

)
}



export default CampoTexto

// Proxima aula vamos aprender a reaproveitar o codigo ja feito anteriormente, deixando dinamico com a possibilidade de alterar apenas a area necessario, ex: Cargo, imagem