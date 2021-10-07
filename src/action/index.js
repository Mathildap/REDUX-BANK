export default function setDeposit(amount) {
    console.log('action', amount);

    return {
        type: 'INCREMENTED',
        amount: amount,
    };
}
