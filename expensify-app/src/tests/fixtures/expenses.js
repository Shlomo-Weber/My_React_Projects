import moment from 'moment'


export default [{
    id:'1',
    description:'Gum',
    note: '',
    amount: 190,
    createdAt: 0
},{
    id:'2',
    description:'Herp',
    note: '',
    amount: 1200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id:'3',
    description:'Derp',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]