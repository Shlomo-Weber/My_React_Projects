import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid'

// ADD_EXPENSE
const addExpense = (
    { description = '',
     note = '',
      amount = 0, 
      createdAt = 0
    }={}
 )=>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id }={})=>({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates )=>({
    type: 'EDIT_EXPENSE',
    id,
    updates

})

// SET_TEXT_FILTER
const setTextFilter =(text='')=>({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = (date='')=>({
    type: 'SORT_BY_DATE',
    date

})

// SORT_BY_AMOUNT
const sortByAmount = (amount='')=>({
    type: 'SORT_BY_AMOUNT',
    amount
})

// SET_START_DATE
const setStartDate = (startDate='')=>({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate='')=>({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !==action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates,
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

// Filters Reducer 

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
        }
        default: 
            return state
    }
}

// Store creation 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    )

store.subscribe(()=>{
    console.log(store.getState())
    console.log('running')
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200 }));

store.dispatch(setTextFilter('derp'))
// store.dispatch(sortByDate()) // date
store.dispatch(sortByAmount()) // amount
store.dispatch(removeExpense({id: expenseOne.expense.id }))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500, description:'herpderp' }))

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))
store.dispatch(setEndDate())
store.dispatch(setStartDate(354))
store.dispatch(setStartDate(387))


const demoState = {
    expenses: [{
        id:'sfdvaSDvh',
        description: 'Rent',
        note: 'This was the final payment for this month',
        amount: 31000,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
