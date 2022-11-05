const middlePointCalculator = (coordinates : Array<Array<number>>) => {
    let middlePoint = [0.0, 0.0];
    coordinates.forEach((coord) => {
        console.log(coord);
        middlePoint[0] += coord[0];
        middlePoint[1] += coord[1];
    })
    middlePoint[0] = middlePoint[0]/coordinates.length;
    middlePoint[1] = middlePoint[1]/coordinates.length;
    return middlePoint;
};

export default middlePointCalculator;