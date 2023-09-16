import './ListaSuspensa.css'

const ListaSuspensa = (props)=>{
    // console.log(props.itens)
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {/* usamos o proprio nome do item como key pq cada item da lista ja tem seu nome unico */}
                {props.itens.map(item => <option key = {item}>{item}</option> )}
            </select> 
        </div>
    )
}

export default ListaSuspensa