class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.showDeets=this.showDeets.bind(this)
        this.state= {
            visibility:false
        }
    }
    showDeets(){
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Toggle Visibility</h1>
                    <button onClick={this.showDeets}>
                    {this.state.visibility ? 'Hide details': 'Show details'}
                    </button>
                    {this.state.visibility && (
                        <div>
                        <p>These are the details you can see now</p>
                        </div>
                    )}
            </div>
        )
    }
}

ReactDOM.render(<Toggle/>, document.getElementById('app'))
