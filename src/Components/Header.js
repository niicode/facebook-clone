import React from 'react'
import ReactDOM from "react-dom"

// material-ui icon imports
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"


import {Avator, IconButton} from "@material-ui/icons"

// import {Navbar, Nav} from "react-bootstrap";


const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
          alt="facebook-logo"/>
      </div>
      <div className="header__input">
        <SearchIcon/>
        <input placeholder="search my face" type="text"/>
      </div>
      <div className= "header__center">
        <div className="header__option header__option--activate">
          <HomeIcon fontsize ="large"/>
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontsize="large"/>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avator fontsize="large"/>
        </div>
      </div>
    </div>
    )
}
ReactDOM.render(
    <Header/>, document.getElementById("root")
)

export default Header
