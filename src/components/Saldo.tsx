import React from 'react';
import { useSelector } from 'react-redux';

function Saldo() {
    const amount = useSelector((state: { amount: number }) => state.amount);

    return (
        <section>
            <h2>Ditt saldo: {amount} :-</h2>
        </section>
    );
}

export default Saldo;
