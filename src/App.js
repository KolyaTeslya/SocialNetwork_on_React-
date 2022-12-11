import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/8-sunset-over-water-focusstock.jpg" />
        </div>
        <div>
          ava + description 
        </div>
        <div>
          My posts
          <div>
            New post 
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
