import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './CurrencyForme';
const ExpenseTotal = () => {

    // en utilisant la destruction, récuperez seulement l'expenses.
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;