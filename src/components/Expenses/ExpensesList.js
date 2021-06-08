// dependencies

//apply css
import './ExpensesList.css'

// import ExpensesItem
import ExpenseItem from './ExpenseItem'

// define component
const ExpensesList = props => {
    if (props.items.length === 0) {
        return <p className='expenses-list__fallback'>No Expenses Found</p>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    key={expense.id}
                />
            ))}
        </ul>
    )
}

//export the conponent
export default ExpensesList