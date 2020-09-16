import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values',() =>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should setup set text filter', ()=>{
    const text = 'this is my text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(text)
})


test('should setup startDate filter',()=>{
    const startDate = moment().startOf('month')
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action )
    expect(state.startDate).toEqual(startDate)
})


test('should setup endDate filter', ()=>{
    const endDate = moment().endOf('month')
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})