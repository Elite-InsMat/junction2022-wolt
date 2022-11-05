const feeCalculator = (baseFee : number, participants : number, costReduce : number) => {
    const totalFee = baseFee * Math.pow(participants, 0-costReduce);
    return totalFee
};

export default feeCalculator;