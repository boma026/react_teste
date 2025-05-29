import { ReactNode } from "react"

type ExampleAreasProps = {
    children: ReactNode
}

export const ExampleAreas = ({children}: ExampleAreasProps) => {
    return (
        <div className="w-full h-88 bg-amber-100 border-b-2">
            {children}
        </div>
    )
}