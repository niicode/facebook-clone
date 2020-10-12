import React from 'react'
import MessageSender from "./MessageSender"
import StoryReel from "./StoryReel"
const Feed = () => {
    return (
        <div className="feed">
          <StoryReel/>
          <MessageSender/>

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
