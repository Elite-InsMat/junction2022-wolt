import { Coordinate } from "../types/util-types";

const middlePointCalculator = (coordinates : Array<Coordinate>): Coordinate => {
    const middlePoint = [0.0, 0.0];
    coordinates.forEach((coord) => {
        middlePoint[0] += coord.lat;
        middlePoint[1] += coord.long;
    })
    middlePoint[0] = middlePoint[0]/coordinates.length;
    middlePoint[1] = middlePoint[1]/coordinates.length;
    return { 
        lat: middlePoint[0],
        long: middlePoint[1]
    };
};

export default middlePointCalculator;