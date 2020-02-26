// class Secret extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'top secret!'
//         };
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }
//
//     onButtonClick(){
//         this.setState(() => ({
//             name: 'Mark'
//         }));
//     }
//
//     render(){
//         return (
//             <div>
//                 <h1> My name is {this.state.name} </h1>
//                 <button onClick={this.onButtonClick}> reveal the secret!</button>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Secret/>,
//     document.getElementById('root')
// );

//
// Merge functions
//
// class ShallowMerge extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             user: {
//                 name: 'Mark',
//                 colors: {
//                     favourite: ''
//                 }
//             }
//         };
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }
//
//     onButtonClick(){
//         this.setState({
//             user: {
//                 colors: {
//                     favourite: 'blue'
//                 }
//             }
//         });
//     }
//
//     render(){
//         return (
//             <div>
//                 <h1>My favourite color is {this.state.user.colors.favourite} and my name is {this.state.user.name}</h1>
//                 <button onClick={this.onButtonClick}>show the color!</button>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <ShallowMerge/>,
//     document.getElementById('root')
// );

//
// Свойства по умолчанию
//
// class Counter extends React.Component {
//     static propTypes = {
//         incrementBy: PropTypes.number,
//         onIncrement: PropTypes.func.isRequired
//     };
//
//     static defaultProps = {
//         incrementBy: 1
//     };
//
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         };
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }
//
//     onButtonClick(){
//         this.setState(function(prevState, props){
//             return {count: prevState.count + props.incrementBy};
//         });
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1> {this.state.count} </h1>
//                 <button onClick={this.onButtonClick}>++</button>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Counter incrementBy={1} />, document.getElementById('root'));


//
// Компонент без состояния
//
function Greeting(props){
    return <div>Hello {props.for}</div>
}

Greeting.propTypes = {
    for: PropTypes.string.isRequired
};

Greeting.defaultProps = {
    for: 'friend'
};

ReactDOM.render(<Greeting for="Mark"/>, document.getElementById("root"));