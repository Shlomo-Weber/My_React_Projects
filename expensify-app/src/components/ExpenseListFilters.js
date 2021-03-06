import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import {v4 as uuid} from 'uuid'

const uuid4 = uuid()

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate})=> {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused)=> {
       this.setState(()=>({ calendarFocused }))
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e)=>{    
        if(e.target.value === 'date'){
            this.props.sortByDate()
        }
        else if(e.target.value === 'amount'){
            this.props.sortByAmount()
        }
    }
    render (){
        return (
            <div>
                <input type ="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId={uuid4}
                endDate={this.props.filters.endDate}
                endDateId={uuid4}
                onDatesChange={this.onDatesChange}
                focusedInput ={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>{false}}
                />
            </div>
        )  
    }
}


const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=>dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)