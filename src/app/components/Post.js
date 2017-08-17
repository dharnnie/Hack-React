import React from "react";

export class Post extends React.Component {
  render() {
    return(
      <div>
        <p>
        Hey, I’m Daniel and I’ll be showing you how I organize my go applications. I’ll assume you are at least able to write simple go code and you are familiar with general conventions of the go programming language. If you are interested in getting
            started with go, here (Golang Tour) is a great place to start. If for some reason, you are like me 2 years ago who had to sneak around Co-Creation Hub for Internet access or hack public library wifi-s (This is bad, don’t do it!) to learn,
            there are tons of books available for a few KBs of your data. This book by Caleb Dosxey is a great resource.
        </p>
        <h5>Straight to business</h5>
        <p>
            When I started learning Go, about a year ago (pun intended), I faced this same issue I encountered when I picked up Java and even now, learning JavaScript is posing the same challenge (although fairly easier to comprehend). After hundreds
            of googling, surfing limited articles on golang and of course writing a few hobbyist go web apps, I reached a compromise. We’ll be using a tiny application I created to raise funds for tuition to study at African Leadership University
            as a sample. The application itself is hosted on heroku and the database is hosted on MongoLab.
        </p>
      </div>
    );
  }
}
