import logo from './logo.svg';
import './App.css';
import JSONDATA from './Data.json'
import{useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
  <div className='App'>
    <input type="text" placeholder='Search...' 
    onChange={event => {
      setSearchTerm(event.target.value)}}/>                                    
    {JSONDATA.filter((val)=>{
      if (searchTerm == ""){
        return val
      } else if (val.product.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val
      }
    }).map((val,key)=> {
      return (
      <div className='user' key={key}>
        <p>{val.product}</p>
      </div>
      );
    })}
  </div>
  );
}

export default App;
