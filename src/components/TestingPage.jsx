import { Circle, Square } from "./svg/Shapes";

export const Testing = ({ shape }) => {
    switch (shape) {
        case "circle":
            return <Circle />;
        case "square":
            return <Square />;
        default:
            return <div></div>;
    }
};