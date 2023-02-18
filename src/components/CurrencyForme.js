import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
        // en utilisant la destruction, récuperez seulement la valeur budget.
        const [selectedValue, setSelectedValue] = useState('£');
        const [valCurrency, setValCurrency] = useState(`Currency(${selectedValue})`);
        const handleChange = (event) => {
            
            //const valeur = "Currency ("+event.target.value+")"
          setSelectedValue(event.target.value);
          dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
        };
        const selectedText = `Currency(${selectedValue})`;
    return (
        <div className='alert alert-success'>
        Currency: <select className="listeCurrency" value={selectedValue} onChange={handleChange}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
        </div>
    );
};
export default Currency;