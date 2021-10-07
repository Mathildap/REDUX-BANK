export default function setWithdraw(amount) {
    console.log('action', amount);

    return {
        type: 'DECREMENTED',
        amount: amount,
    };
}
