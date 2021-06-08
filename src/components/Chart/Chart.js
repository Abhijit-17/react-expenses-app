// apply css
import './Chart.css'
// import CharBar
import ChartBar from './ChartBar'
// create component
const Chart = props => {

    // calculate the maxValue of the 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {
                props.dataPoints.map(dataPoint => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
}

// export component
export default Chart