import { useState } from 'react';

interface Props {
    sendWithdraw(amount: number): void;
}

function Uttag(props: Props) {
    let { sendWithdraw } = props;

    const [withdraw, setWithdraw] = useState<string>('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        let theWithdraw: number = parseInt(withdraw);
        sendWithdraw(theWithdraw);
        setWithdraw('');
    };

    const onChange = (e: any) => {
        setWithdraw(e.target.value);
    };

    return (
        <section className='containers'>
            <form onSubmit={onSubmit}>
                <h3>Uttag</h3>
                <input
                    type='number'
                    onChange={onChange}
                    value={withdraw}
                    placeholder='...'
                    required
                ></input>
                <br />
                <button type='submit'>Ta ut</button>
            </form>
        </section>
    );
}

export default Uttag;
