
// apply CSS
import './ExpensesFilter.css';

//define component
const ExpensesFilter = (props) => {
  
  // applying handler
  const dropdownChangeHandler = (event) => {
    // passing the data to parent component
    props.onChangeFilter(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

//export component
export default ExpensesFilter;