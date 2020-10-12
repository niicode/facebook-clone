import React from "react"


import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
// import {usesState} from '../StateProvider'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="dp"
             title="Nii Darku"/>
            <SidebarRow Icon={LocalHospitalIcon}
            title = "Covid-19 Information Center"/>

            <SidebarRow Icon ={EmojiFlagIcon}
            title ="Page"/>
            <SidebarRow Icon={PeopleIcon}
            title="Friends"/>
            <SidebarRow Icon={ChatIcon}
            title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon}
            title="Marketplace"/>

            <SidebarRow Icon={VideoLibraryIcon}
            title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon}
            title="More"/>

        </div>
    )
}

export default Sidebar

