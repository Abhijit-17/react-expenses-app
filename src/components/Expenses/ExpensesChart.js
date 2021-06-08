// import Chart component
import Chart from '../Chart/Chart'

// Define the component
const ExpensesChart = props => {
    // 12 bars for each month
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    // fill the expense value fo the months
    for(let expense of props.expenses) {
        const expenseMonth = expense.date.getMonth() // 0 for January
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return <Chart dataPoints={chartDataPoints}/>
}

// Export the Component
export default ExpensesChart