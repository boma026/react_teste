type PersonProps = {
    name?: string,
    avatar: string,
    roles: string[]
}



export const Person = ({ name = "ciclano", avatar, roles}: PersonProps) => { //o nome ciclano só ira vir se nao for passado nada no parametro da Prop
    
    return(
        <div>
        <p className="font-extrabold">Olá, meu nome é {name}</p>
        <img src={avatar} alt="foto Boma" className="w-52"/>
        <p>Função 1: {roles[0]}</p>
        <p>Função 2: {roles[1]}</p>

        </div>
    )
} 