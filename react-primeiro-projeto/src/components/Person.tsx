const pegarDiadaSemana = (today: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {weekday: "long"}).format(today);
}

type Props = {
    name: string,
    avatar: string,
    roles: string[]
}

export const Person = ({ name, avatar = "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-default-avatar-image_2237212.jpg", roles}: Props) => {
   
    const today : Date = new Date();

    return (
        <>
            <h1>{name} - {pegarDiadaSemana(today)} </h1>  {/*Dentro dos colchetes da pra utilizar um código, variável em TS*/}
            
            <img src={avatar} alt={name} className="w-40"/>
            
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </>
    )
}