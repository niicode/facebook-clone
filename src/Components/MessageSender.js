import React, {useState} from 'react'
import { Avatar, Input } from '@material-ui/core'
import './MessageSender.css'

//imported icons from @material-ui
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


const MessageSender = () => {
  const [input, setInput] = useState('')
  const [image, setImage] = useState(null)

  const handleChange=(e)=>{
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
  }

  const handleSubmit= () =>{
    console.log('submitting')
  }
    return (
        <div>
          <div className="messageSender__top">
            <Avatar src ="imagehere"/>
            <form>
              <input type="text" 
                className= "messageSender__input" 
                placeholder="what's on your mind?" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)}/>
              <Input type="file" className="messageSender__fileSelector" onChange= {handleChange}/>
              <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
          </div>
          <div className="messageSender__bottom">
            <div className="messageSender__option">
              <VideocamIcon style={{color: "red"}}/>
              <h4>Live Video</h4>
            </div>
            <div className="messageSender__option">
              <PhotoLibraryIcon style={{color: "green"}}/>
              <h4>Photo/Video</h4>
            </div>
            <div className= "messageSender__option">
              <InsertEmoticonIcon style={{color: 'orange'}}/>
              <h3>Feeling/Activity</h3>
            </div>
          </div>


        </div>
    )
}

export default MessageSender
