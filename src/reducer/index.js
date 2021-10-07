export default function reduce(state, action) {
    console.log('reducer', state);

    switch (action.type) {
        case 'INCREMENTED':
            return {
                ...state.amount,
                amount: state.amount + action.amount,
            };
        case 'DECREMENTED':
            return {
                ...state.amount,
                amount: state.amount - action.amount,
            };
        default:
            return state;
    }
}
