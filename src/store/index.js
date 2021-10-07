import reduce from '../reducer';
import { createStore } from 'redux';
const initialState = { amount: 2000 };
export const store = createStore(reduce, initialState);
