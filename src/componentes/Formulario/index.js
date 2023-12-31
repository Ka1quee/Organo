import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    // criando uma funcao para quando submeter o formulario ele a execute

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            {/* dizendo que ao submeter o formulario ele deverá executar essa função criada acima */}
            <form onSubmit={aoSalvar}> {/*É mais facil utilizar on submit na tag form do q direto no botao*/}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    itens={times}
                    label="Times"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                {/* atraves do children é possivel alterar imagens e nome da tag */}
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario