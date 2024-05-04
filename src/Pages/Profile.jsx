import React from 'react'

function Profile() {
  var userName="Daniel Boulch";
  var bio ="I'm working on my final project!";
  var rng = Math.floor(Math.random()*6);
  if(rng===0){
    var image="IMG/anaconda.png";
  }else if(rng===1){
    image="IMG/cow.png";
  }else if(rng===2){
    image="IMG/deer.png";
  }else if(rng===3){
    image="IMG/ganesha.png";
  }else if(rng===4){
    image="IMG/panda.png";
  }else if(rng===5){
    image="IMG/rabbit.png"
  }

  return (
    <body>
      <div class="profile-header">
        <div className="profile-img">
          <img src={image} width="200" alt=""></img>
        </div>
        <div className="profile-info">
          <h3 class="user-name">{userName}</h3>
          <p class="bio">{bio}</p>
        </div>
      </div>
      
      <div className="profile-body">
        <div className="profile-posts">
          <h1>Posts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </body>
  )
}

export default Profile
