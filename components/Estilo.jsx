export default function Estilo(props){
    return (
        <div>
            <h1 style={{backgroundColor: props.numer >= 0 ? "#2D2" : "#D22", 
            color: "#fff",
            }}>
                Texto
            </h1>
        </div>
    )
}