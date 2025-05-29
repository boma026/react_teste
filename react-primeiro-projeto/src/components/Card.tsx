import { ReactNode } from "react"

type Props = {
    frase: string;
    autor?: string
}


export const Card = ({frase, autor }: Props) => {

    return (
        <div className="border-2 border-red-600 p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic">{frase}</h3>
            {autor &&
                <p className="text-right text-sm">{autor}</p>}
            {!autor &&
                <p className="text-right text-sm italic"> Autor Desconhecido</p>
            } 
            
        </div>
)}