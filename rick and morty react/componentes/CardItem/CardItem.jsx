export default function CardItem({id, nome, quantidade}){
    return(
        <>
            <li key={id}> {nome} - {quantidade} </li>
        </>
    )
}