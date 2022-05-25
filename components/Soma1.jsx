import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function SomaUm(props){
    props.numero++
    return (
        <div>
            <h1>{props.numero}</h1>
        </div>
    )
}