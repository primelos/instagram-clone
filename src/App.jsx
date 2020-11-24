import { useState } from 'react'
import './App.css';
import Post from './components/post'



function App() {
  const [posts, setPosts] = useState([
    {   
        username:"Carlos",
        caption:"build a clone",
        imgUrl:"https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"},
    {   
        username:"Ethan",
        caption:"build a clone",
        imgUrl:"https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"}
  ])





  return (
    <div className="App">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram name"
          className="app__headerImage"
        />
      </div>
      {
        posts.map((post, idx) => (
          <Post username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
        ))
      }
      
    </div>
  );
}

export default App;
