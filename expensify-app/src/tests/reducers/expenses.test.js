import expensesReducer from '../../reducers/expenses'
import moment from 'moment'
import expenses from '../fixtures/expenses'


test('should setup default expenses state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should add expense', ()=>{
    const expense = {
        id: '4',
        description: 'herp',
        amount: 1568,
        createdAt: 1234567,
        note: 'this is my note'
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})


test('should edit expense', ()=>{
    const description = 'Garden gnomes'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test('should not edit expense if id not found', ()=>{
    const description = 'Garden gnomes'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})