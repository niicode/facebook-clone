import React from 'react'
import MessageSender from "./MessageSender"
import Post from "./Post"
import StoryReel from "./StoryReel"
const Feed = () => {
    return (
        <div className="feed">
          <StoryReel/>
          <MessageSender/>
          <Post
          profilePic =""
          message = "PreMest project underway"
          timestamp= "1602542640"
          imgName = "imgName"
          username="Nii Darku"
          />
          {/* { 
            postsDatamap(entry =>{
              <Post
                profilePic={entry.avatar}
                messanger={entry.text}
                timestamp={entry.timestamp}
                imgName={entry.imgName}
                username={entry.user}/>

            })
          } */}
            
        </div>
    )
}

export default Feed
