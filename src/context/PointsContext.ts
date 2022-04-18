import { createContext } from "react";

const PointsContext = createContext({
    setPoints: (points:number)=>{},
    addPoints: (points:number)=>{},
    removePoints: (points:number)=>{},
    points: 0
});

export default PointsContext;