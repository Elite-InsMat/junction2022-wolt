const feeCalculator = (baseFee : number, participants : number, costReduce : number) => {
    let totalFee = baseFee * Math.pow(participants, 1-costReduce);
    return totalFee
};

export default feeCalculator;