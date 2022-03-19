import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const districtStyle = {
  backgroundColor : "salmon",
  padding : "20px",
  margin : "30px",
  borderRadius : "10px"
}

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name = "Sylhet" speciality ="Tea"></District>
      <District name = "Odd Dhaka" speciality = "Biryani"></District>
      <District name = "Chitagoang" speciality = "Ocean"></District>
    </div>
  );
}

// dynamically data load from api and use react hook : useState , useEffect
function LoadPost (){
  const [posts , setPost] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h2>Post : {posts.length} </h2>
      {
        posts.map( post => <Post post ={post} key = {post.id}></Post>)
      }
    </div>
  )
}

function Post(props){
  console.log(props)
  const {title, body} = props.post;
  console.log(title, body)
  return(
    <div style={districtStyle}>
      <h2>Title : {title}</h2>
      <p>Body : {body}</p>
    </div>
  )
}



//making component with props ...
function District(props){
  // console.log(props)
  const {name, speciality} = props
  const [update, setUpdate] = useState(1);
  const updateValue = () =>{
    const newValue = update * 2;
    setUpdate(newValue);
  }
  return (
    <div style={districtStyle}>
      <h2>Name : {name} </h2>
      <p>Speciality : {speciality} </p>
      <p>Quentity : {update}</p>
      <button onClick={updateValue}>Update Value</button>
    </div>
  )
}
export default App;
