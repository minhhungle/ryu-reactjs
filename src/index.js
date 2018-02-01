import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';
import registerServiceWorker from './registerServiceWorker';*/

/*const user = {
	name: "RyuLe",
	email: "hung.lm@workhouse.me"
};

const element = <h1> Hello World, my name is: {user.name}, and email: {user.email}</h1>;

const element = (
	<div className = "hello">
		<h1>Hello World</h1>
		<h2>My name is: {user.name}, and email: {user.email}</h2>
	</div>
);

var numbers = [1,2,3,4];
var doubleNumbers = numbers.map((eachNumber) => eachNumber * 2 + "; ");

ReactDOM.render(<h1>doubleNumbers is: {doubleNumbers}</h1>, document.getElementById('root'));*/

//registerServiceWorker();

// function UserInfo(props) {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Email: {props.email}</p>
// 		</div>
// 	);
// }
// class UserDetail extends React.Component {
// 	render() {
// 		return (
// 			<div className="userDetail">
// 				<p>Name: {this.props.name}</p>
// 				<p>Email: {this.props.email}</p>
// 			</div>
// 		);
// 	}
// }
// class OtherInfor extends React.Component {
// 	render() {
// 		return (
// 			<div className="otherInfor">
// 				<p>Other Information: {this.props.otherInformation}</p>
// 			</div>
// 		);
// 	}
// }
// class UserInfo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<UserDetail name={this.props.name} email={this.props.email}/>
// 				<OtherInfor otherInformation={this.props.otherInformation} />
// 			</div>
// 		);
// 	}
// }
//
//
// const element = <UserInfo name="Duong Thi Thu Nhu" email="nhudtt@workhouse.me" otherInformation="She is sleeping"/>


//lession 5
//https://www.youtube.com/watch?v=1IAQX1LMUC4&index=5&list=PLWBrqglnjNl0tzkepfj3cmKTF09jbcN5E
// class Counter	extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {seconds: 0};
// 	}
// 	incrementCounter() {
// 		this.setState(
// 			(prevState, props) => ({
// 				seconds: prevState.seconds + 1
// 			})
// 		);
// 	}
// 	componentDidMount() {
// 		this.timerID = setInterval(
// 			()=>this.incrementCounter(),
// 			1000
// 		);
// 	}
// 	componentWillUnMount() {
// 		clearInterval(this.timerID);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>This is a counting machine! </h1>
// 				<h2>Seconds: {this.state.seconds} s</h2>
// 			</div>
// 		);
// 	}
// }

//Lession 6
//https://www.youtube.com/watch?v=OvND-OcAcko&list=PLWBrqglnjNl0tzkepfj3cmKTF09jbcN5E&index=6

/*class ToggleButton extends React.Component{
	constructor(props) {
		super(props);
		this.state = {isOn: true};
		this.buttonClick = this.buttonClick.bind(this);
	}
	buttonClick() {
		this.setState(prevState => ({
				isOn: !prevState.isOn
			}
		));
	}
	buttonClick = () => {
		this.setState(prevState => ({
				isOn: !prevState.isOn
			}
		));
	}
	render() {
		return (
			<button className="ToggleButton" onClick={this.buttonClick}>
				This is a toggle button:
				{this.state.isOn ? " ON" : " OFF"}
			</button>
		);
	}
}
*/

//Lession 7
//https://www.youtube.com/watch?v=KUDkqgf-Ayw
/*class LoginComponen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
	}

	handleLogout = () => {
		this.setState({isLoggedIn: false});
		console.log(this.state.isLoggedIn);
	}

	handleLogin = () => {
		this.setState({isLoggedIn: true});
		console.log(this.state.isLoggedIn);
	}

	render() {
		let myButton = null;
		let title = null;
		if (this.state.isLoggedIn) {
			myButton = <button onClick={this.handleLogout}>Logout</button>
		} else {
			myButton = <button onClick={this.handleLogin}>Login</button>
		}
		title = this.state.isLoggedIn ? <h1>Logged in</h1> : <h1>Logged out</h1>
		return (
			<div>
				{title}
				{myButton}
			</div>
		);
	}
}

class MailComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<h1>Mail statistics</h1>
				{this.props.newMessages.length > 0 &&
					<h2>
						You have {this.props.newMessages.length} new messages
					</h2>
				}
			</div>
		);
	}
}
ReactDOM.render(
	<MailComponent newMessages={[]}/>,
	document.getElementById('root')
);
*/

//Lession 8
//https://www.youtube.com/watch?v=DYJA8Hr4WEA
function ListItem(props) {
	return <li>{props.value}</li>;
}

class AnimalsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.listItems = props.animals.map(
			(key, index) => <ListItem key={key.id} value={index.toString() + "." + key.title} />
		);
	}

	render() {
		return(
			<ul>
				{this.listItems}
			</ul>
		);
	}
}
const animals = [
									{
										id: 'xy01',
										name: 'Tiger',
										title: 'This is Tiger'
									},
									{
										id: 'xy02',
										name: 'Dragon',
										title: 'This is Dragon'
									},
									{
										id: 'xy03',
										name: 'Dog',
										title: 'This is Dog'
									},
									{
										id: 'xy04',
										name: 'Lion',
										title: 'This is Lion'
									},
									{
										id: 'xy05',
										name: 'Cat',
										title: 'This is Cat'
									},
									{
										id: 'xy06',
										name: 'Dinosaur',
										title: 'This is Dinosaur'
									}
];
ReactDOM.render(
	<AnimalsComponent animals={animals} />,
	document.getElementById('root')
);
