// Объявление дочернего компонента
class ChildComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string
    };

    static defaultProps = (function(){
        console.log('ChildComponent: defaultProps');
        return {};
    })()

    constructor(props){
        super(props);
        console.log('ChildComponent: state');
        this.oops = this.oops.bind(this);
    }

    oops(){
        this.setState(() => ({ oops: true }));
    }

    componentWillMount(){
        console.log('ChildComponent: componentWillMount');
    }

    componentDidMount(){
        console.log('ChildComponent: componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('ChildComponent: componentWIllReceiveProps()');
        console.log('nextProps: ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('<ChildComponent/> - shouldComponentUpdate()');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return true;
    }

    componentDidUpdate(previosProps, previosState){
        console.log('ChildComponent: componentDidUpdate');
        console.log('previosProps: ', previosProps);
        console.log('previosState: ', previosState);
    }

    componentWillUnmount(){
        console.log('ChildComponent: componentWillUnmount');
    }
    render(){
        console.log('ChildComponent: render');
        if(this.state.oops){
            throw new Error('Something went wrong');
        }
        return [
            <div>
                Name: {this.props.name}
            </div>,
            <button key="error" onClick={this.oops}>Create error</button>
        ];
    }
}

//Создание родительского компонента
class ParentComponent extends React.Component {
    static defaultProps = (function(){
        console.log('ParentComponent: defaultProps');
        return {
            true: false
        };
    })();
    constructor() {
        super();
        this.state = {
            name: ''
        };

        this.onInputChange =
            this.onInputChange.bind(this);
    }
    componentWillMount(){
        console.log('ParentComponent: componentWillMount');
    }

    componentDidMount(){
        console.log('ParentComponent: componentDidMount');
    }

    onInputChange(e){
        this.setState({ text: e.target.value})
    }

    componentWillUnmount(){
        console.log('ParentComponent: componentWillUnmount');
    }

    componentDidCatch(err, errorInfo){
        console.log('componentDidCatch');
        console.log(err);
        console.log(errorInfo);
        this.setState(() => ({ err, errorInfo }));
    }

    render(){
        console.log('ParentComponent: render');
        if(this.state.err){
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    { this.state.error && this.state.error.toString()}
                    <br/>
                    { this.state.errorInfo.componentStack}
                </details>
            )
        }
        return [
            <h2 key="h2"> Learn about rendering and lifecycle methods!</h2>,
            <input key="input" value={this.state.next} onChange={this.onInputChange}/>,
            // Отображение дочернего компонента внутри родительского
            <ChildComponent key="ChildComponent" name={this.state.text}/>
        ]
    }
}

ReactDOM.render(
    <ParentComponent/>,
    document.getElementById('root')
)