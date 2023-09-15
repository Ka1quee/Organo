import "./CampoTexto.css"

// Guardando uma função dentro de uma variavel constante
//Importante começar com letra maiuscula
// utilizamos arrow function

// Apenas uma forma diferente de escrever aquela function

// esta variavel ja armazena todas aquelas linhas de codigo
const CampoTexto = (props) => { //props sao as propriedades recebidas pelo componente
    
    // const placeholderModificada = `Sim ${props.placeholder}` template string 
    
    return (

        // continuamos criando o form normalmente

        <div className="campo-texto">
            {/* ao inves de apenas colocarmos um texto, dessa vez estamos acessando a propriedade label do componente */}
            {/* variavel sempre sentre chaves */}
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>



    )

}




export default CampoTexto

// Proxima aula vamos aprender a reaproveitar o codigo ja feito anteriormente, deixando dinamico com a possibilidade de alterar apenas a area necessario, ex: Cargo, imagem