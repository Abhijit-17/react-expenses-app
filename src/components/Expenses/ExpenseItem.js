// import date component
import ExpenseDate from './ExpenseDate'
// import wrapper
import Card from '../UI/Card'
// Import the CSS file
import "./ExpenseItem.css";

// create the component
const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}

// export the component
export default ExpenseItem;
