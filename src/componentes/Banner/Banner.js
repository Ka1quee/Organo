import "./Banner.css" // importamos o css dessa forma, colocamdo o caminho direto

// dentro dos componentes sempre farenos essa mesma estrutura, "Function + nome da funcao"
// letra minuscula
function Banner() {
    // e dentro da function colocamos o que esse componente irá retornar

    // sempre utilizamos return dentro da function

    return ( // parentes para multiplas linhas
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
        </header>
    )
}

// e por fim o export default com o nome do componente
// letra minuscula

export default Banner

// tudo isso se trata de JSX, a forma que o react le isso e transforma em elemento na pagina, misturando html com js

