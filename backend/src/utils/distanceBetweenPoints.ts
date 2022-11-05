type Coordinate = {
    lat: number,
    long: number
}

const distanceBetweenPoints = (point1 : Coordinate, point2 : Coordinate) => {
    const x = point2.lat - point1.lat;
    const y = point2.long - point1.long;
    const distance = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));
    return distance
}

export default distanceBetweenPoints;