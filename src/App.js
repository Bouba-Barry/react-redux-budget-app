import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
// Add code to import the other components here under
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Budget component here under */}      
                    <div className='col-sm'>
                        <Budget />
                    </div>  

                        {/* Remaining component here under */}   
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>      

                        {/* ExpenseTotal component here under */}  
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>      
                       
                        {/*  ExpenseList component here under */}       
                    <ExpenseList/>  

                    {/* AllocationForm component here under */}
                    <AllocationForm/>


                </div>
            </div>
        </AppProvider>
    );
};
export default App;
