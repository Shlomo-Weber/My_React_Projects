
console.log('App.js is running ')

// JSX - Javascript XML

const app = {
    title:'Indecision App',
    subtitle:'Doodly doo',
    options: []
}

const onFormSubmit = (e)=>{
    e.preventDefault()
    
    const option = e.target.elements.option.value

    if (option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderPage()
    }
}

const removeAll = ()=>{
    app.options = []
    renderPage()
}

const makeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')


const renderPage = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle  && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ?'Here are your options': 'There are no options' }</p>
            <ol>
            <button disabled={app.options.length===0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            {
             app.options.map((option)=>{
                 return <li key={option}>{option}</li>
             })
            }
            </ol>
            <form onSubmit = {onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>

        </div>
        );

        ReactDOM.render(template, appRoot)
}

renderPage()