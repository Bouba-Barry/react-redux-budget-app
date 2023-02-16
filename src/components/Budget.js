import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
        // en utilisant la destruction, récuperez seulement la valeur budget.
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;