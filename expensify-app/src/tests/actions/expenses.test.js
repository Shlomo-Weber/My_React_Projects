import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('should setup remove expense action object', ()=>{
    const action = removeExpense({ id:'123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('should setup the edit expense actiona object', ()=>{
    const action = editExpense('123', {note: 'new note'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123',
        updates: {
            note:  'new note'
        }
    })
})

test('should setup the add expense action object with values provided', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note:'this is last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should setup the add expense action object with default values', ()=>{
    const dummyExpense = {
        description:'',
        note: '',
        amount: 0, 
        createdAt: 0
    }
    const action = addExpense(dummyExpense)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...dummyExpense,
            id: expect.any(String)
        }
    })
})