export default function Lista2(){
    return(
        <div>
            {exibeLista()}
        </div>
    )
}

function exibeLista(){
    const lista = [];
    for(let i=1;i<=10;i++){
        lista.push(<span>{i},</span>)
    }
    return lista;
}