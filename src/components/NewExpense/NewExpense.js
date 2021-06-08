// Dependencies
import { useState } from 'react'
// import ExpenseForm
import ExpenseForm from './ExpenseForm'
// Import CSS
import './NewExpense.css'

//define conponent
const NewExpense = (props) => {
    // initial state
    const [isEditing, setIsEditing] = useState(false)
    // define the handler
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // pass data to the parent component (App)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditing = () => {
        setIsEditing(false)
    }

    return(
        <div className='new-expense'>
            {!isEditing && <button type='button' onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
    )
}

// export the component
export default NewExpense