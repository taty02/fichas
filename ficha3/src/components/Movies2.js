import React, {Component} from 'react';
class MovieList extends Component{
    render() {
        const detalhe = 'Esta é a minha segunda lista de filmes.';
        return <div>
                <h1>Lista de filmes - Props</h1>
                <Detalhe title= 'Título do Filme' value={detalhe}/>
        </div>
    }
}

function Detalhe(props) {
    return <p>{props.value}</p>;
}
export default MovieList;
