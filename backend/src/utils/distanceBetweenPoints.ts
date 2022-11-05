const distanceBetweenPoints = (point1 : Array<number>, point2 : Array<number>) => {
    const x = point2[0] - point1[0];
    const y = point2[1] - point1[1];
    const distance = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)));
    return distance
}

console.log(distanceBetweenPoints([0,0],[1,1]));
export default distanceBetweenPoints;