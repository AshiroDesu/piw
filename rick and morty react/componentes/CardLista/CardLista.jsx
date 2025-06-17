import CardItem from "../CardItem/CardItem";
import "./CardLista.css";

export default function CardLista ({titulo, lista}) {

    return(
        <>
            <div className="card-container">
                <h4>{titulo}</h4>
                <ul>
                    {lista.map((item) => {
                        return <CardItem id={item.id} nome={item.nome} quantidade={item.quantidade} />
                    })}
                </ul>
            </div>
        </>
    )
}