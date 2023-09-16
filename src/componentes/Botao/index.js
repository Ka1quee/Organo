import './Botao.css'

const Botao = (props) => {
    return (
        // colocamos esse nome para podermos colocar elementos dentro do botão
        // tudo que estiver dentro da tab botao do outro lado será adicionado, e é necessario usar somente esse nome, pq sao os fihos daquela tag
        <button className='botao'>{props.children}</button>
    )
}

export default Botao