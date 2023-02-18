import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
        // en utilisant la destruction, récuperez seulement la valeur budget.
    const { budget,expenses,currency} = useContext(AppContext);
    const [modifiedBudget, setModifiedBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const remainingValue = modifiedBudget - totalExpenses;

    const handleBudgetChange = (event) => {
        let tmp = false;
        let errorMessage ;
        const newBudget = event.target.value;
        if(newBudget < remainingValue){
            tmp = true;
            errorMessage = "Budget is not allow to be lower than the spending ";
        }
        if(newBudget > 20000){
            errorMessage = "Budget limit value is 20,000.";
            tmp = true;
        }
        if(tmp == true){
            alert(errorMessage);
        }
        else{
            setModifiedBudget(newBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
           Budget: {currency}<input type="number" min="0" max="20000" step="10" 
           value={modifiedBudget} onChange={handleBudgetChange} />
        </div>
    );
};
export default Budget;