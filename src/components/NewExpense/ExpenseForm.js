// Dependencies
import { useState } from 'react'

// import CSS
import './ExpenseForm.css'

// define the component
const ExpenseForm = (props) => {

    // set the initial state of the component
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // onCHnage handler for title field
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {...previousState, enteredTitle: event.target.value}
        // })
    }
    
    // on chnage handler for amount
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {...previousState,  enteredAmount: event.target.value}
        // })
    }

    // onChange handler for date
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {...previousState,  enteredDate: event.target.value}
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // send expense data to parent
        props.onSaveExpenseData(expenseData)
        // setting the initial state after submitting the form
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

// export the form
export default ExpenseForm