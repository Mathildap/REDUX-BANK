import './App.css';
import Saldo from './components/Saldo';
import Insattning from './components/Insattning';
import Uttag from './components/Uttag';
import setDeposit from './action';
import setWithdraw from './action';
import { store } from './store';

function App() {
    const sendDeposit = (amount: number) => {
        store.dispatch(setDeposit(amount));
    };

    const sendWithdraw = (amount: number) => {
        store.dispatch(setWithdraw(-amount));
    };

    return (
        <main>
            <h1>
                REDUX BANK <i className='far fa-money-bill-alt'></i>
            </h1>
            <Saldo />
            <section className='dep-wit-container'>
                <Insattning sendDeposit={sendDeposit} />
                <Uttag sendWithdraw={sendWithdraw} />
            </section>
        </main>
    );
}

export default App;
