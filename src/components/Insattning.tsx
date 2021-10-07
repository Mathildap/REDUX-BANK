import { useState } from 'react';

interface Props {
    sendDeposit(amount: number): void;
}

function Insattning(props: Props) {
    let { sendDeposit } = props;

    const [deposit, setDeposit] = useState<string>('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        let theDeposit: number = parseInt(deposit);
        sendDeposit(theDeposit);
        setDeposit('');
    };

    const onChange = (e: any) => {
        setDeposit(e.target.value);
    };

    return (
        <section className='containers'>
            <form onSubmit={onSubmit}>
                <h3>Insättning</h3>
                <input
                    type='number'
                    onChange={onChange}
                    value={deposit}
                    placeholder='...'
                    required
                ></input>
                <br />
                <button type='submit'>Sätt in</button>
            </form>
        </section>
    );
}

export default Insattning;
