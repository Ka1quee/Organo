import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = () => {

    // estamos guardando uma lista de strings dentro de uma variavel
    const times = [ 
        // lista de strings
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]   

    // criando uma funcao para quando submeter o formulario ele a execute

    const aoSalvar = (evento)=>{
        console.log("Form foi submetido");
        evento.preventDefault()
    }

    return (
        <section className="formulario">
            {/* dizendo que ao submeter o formulario ele deverá executar essa função criada acima */}
            <form onSubmit={aoSalvar}> {/*É mais facil utilizar on submit na tag form do q direto no botao*/}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} itens={times} label="Times"/>
                {/* atraves do children é possivel alterar imagens e nome da tag */}
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario