import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Post} from "./components/Post";
import {Comments} from "./components/Comments";

class Body extends React.Component {
  render(){
    var user1 = {
      nick: "danny",
      comment: "I will refer to this folder as the business logic entry of the app. In go, folders are referred to as packages, and in every package you can have several dot go files (Go creators advice that you limit files in each package to 33.. Oh no! I mean 3). 33 files? Lol, except you are building Facebook + Google + Windows OS in one app."
    };
    var user2 = {
      nick: "odun",
      comment: "ServeResource() serves all static files and this function was referenced in line 19 of the first screenshot. Don’t worry about how they work for now. I’ll try to make a video to explain this properly and update here."
    };
    var initialComms = [
      user1,
      user2
    ];
    return(
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Post/>
        </div>
        <div>
          <Comments comms={initialComms} />
        </div>
      </div>
    );
  }
}

render(<Body />, document.getElementById("vlogpost"));
