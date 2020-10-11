import React from 'react';
import ReactDOM from "react-dom"

function User(props){
  return <h2>You are welcome</h2>
} 

function Guest(props){
  return <h2>You have to Login</h2>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn){
  return  <Guest/>
  }else{
    return  <User/>
  }
}


function LoginButton(props){
  return(
    <div>
      <button onClick={props.onClick}>
        Login
      </button>
    </div>
  )
}

function LogoutButton(props){
  return(
    <div>
      <button onClick={props.onClick}>
        Logout
      </button>
    </div>
  )
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: false}
  }

  handleLoginClick(){
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick(){
    this.setState({isLoggedIn: false})
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LoginButton onClick = {this.handleLogoutClick}/>
    }else {
      button = <LogoutButton onClick = {this.handleLoginClick}/>
    }

    return(
      <div>
        <Greeting isLoggedIn= {isLoggedIn}/>
        {button}
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl/>, document.getElementById("root")
)


export default LoginControl;
