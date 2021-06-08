//Dependencies
import { useState } from 'react'
// import ExpenseFilter 
import ExpensesFilter from './ExpensesFilter'
// import ExpensesList
import ExpensesList from './ExpensesList'
// import wrapper
import Card from '../UI/Card'
// import ExpensesChart
import ExpensesChart from './ExpensesChart'
// import the css
import './Expenses.css'

// define the component
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

// export the component
export default Expenses