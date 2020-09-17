import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'


const store = configureStore()

store.dispatch(addExpense({description: 'Water Bill', note: 'pay this now', amount: 350 }))
store.dispatch(addExpense({description: 'Gas Bill', note: 'pay this soon', amount: 45, createdAt:1000 }))
store.dispatch(addExpense({description: 'Electric Bill', note: 'pay this soon', amount: 500}))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)
    
ReactDOM.render(jsx, document.getElementById('app'));
