import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForm = () => {
    return (
        <div className="flex gap-2">
            <h3 className="text-2xl font-bold"></h3>

            <Square/>
            <Circle/>
        </div>
    );
}