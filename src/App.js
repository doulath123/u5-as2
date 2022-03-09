import logo from './logo.svg';
import './App.css';

function App() {
  const data=["Android","Blckberry","iPhone","Window Phone"]
  return (
    <div>
     <h1>Mobile Operating System</h1>
     <ul>
       {data.map((e)=>(
         <li>{e}</li>
       ))}
     </ul>
     <h1>
       Mobile Manufacturers
     </h1>
     <ul>
       <li style={{listStyle:"square"}}>Samsung</li>
       <li style={{listStyle:"square"}}>HTC</li>
       <li style={{listStyle:"circle"}}>Micromax</li>
       <li>Apple</li>
       
     </ul>
    </div>
  );
}

export default App;
