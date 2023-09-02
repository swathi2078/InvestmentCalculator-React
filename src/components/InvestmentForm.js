import React, { useState } from "react";
import classes from './InvestmentForm.module.css';

const initialUserInput={
    'current-savings':1000, 
    'yearly-contribution':1200,
    'expected-return':7,
    'duration':10
};

function InvestmentForm(props) {

    const [currentSavings, setCurrentSavings] = useState(1000);
    const [yearlySavings, setYearlySavings] = useState(1200);
    const [expectedInterest, setExpectedInterest] = useState(7);
    const [investmentDuration, setInvestmentDuration] = useState(10);

    const [userInput,setUserInput]=useState(initialUserInput);

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onCalculate(currentSavings,yearlySavings,expectedInterest,investmentDuration); 
        console.log('formSubmitHandler is clicked');
    }
    const resetButtonHandler = () => {
        setCurrentSavings(1000);
        setYearlySavings(1200);
        setExpectedInterest(7);
        setInvestmentDuration(10);
        console.log('resetButtonHandler is clicked');
        //setUserInput(initialUserInput)
    }

    const currentSavingsHandler = (event) => {
        setCurrentSavings(+event.target.value);
    }

    const yearlySavingsHandler = (event) => {
        setYearlySavings(+event.target.value);
    }

    const interestChangeHandler = (event) => {
        setExpectedInterest(+event.target.value);
    }

    const inputChangeHandler = (input,value) =>{
        setUserInput((prevInput) => {
           return {
             ...prevInput,
             [input]:value
           }
        })
    } 

    const investmentChangeHandler = (event) => {
        setInvestmentDuration(event.target.value);
    }

    return (<form onSubmit={formSubmitHandler} className={classes.form}>
        <div className={classes['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsHandler} />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" value={yearlySavings} onChange={yearlySavingsHandler} />
            </p>
        </div>
        <div className={classes['input-group']}>
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" value={expectedInterest} onChange={interestChangeHandler} />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" value={investmentDuration} onChange={investmentChangeHandler} />
            </p>
        </div>
        <p className={classes.actions}>
            <button onClick={resetButtonHandler} type="reset" className={classes.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={classes.button}>
                Calculate
            </button>
        </p>
    </form>)
}

export default InvestmentForm;