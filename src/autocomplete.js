import logo from './logo.svg';
import './autocomplete.css';
import axios from 'axios'
import { useState,useEffect } from 'react';


function Autocomplete() {
  const [data,setData] = useState([])
  const [input,setInput] = useState('')
  const [suggest, setSuggest] = useState([])

  useEffect(() => {
   const loadData = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
     setData(response.data)
     console.log("data :",data)
   }
   loadData()
  }, [])


  const onChangeInput = (text) => {
    let matches = []
    if(text.length > 0){
      matches = data.filter(d =>{
        const regex = new RegExp(`${text}`,"gi")
        return d.email.match(regex)
        
      })
    }
  console.log("match : ", matches)

    setSuggest(matches)
    setInput(text)
  }

  const onSuggest = (text) => {
    setInput(text)
  }
  return (
    <div className="App col-md-12">
     <input type="text" 
     className="col-md-6" 
     style={{marginTop:"20px"}} 
     onChange={e=>onChangeInput(e.target.value)} 
     value={input} 
     onBlur={()=>{
       setTimeout(()=>{
         setSuggest([])
       },100)
     }}
     />
    <div className="sugges">
      {suggest && suggest.map((s,i)=>
        <div key={i} onClick={() => onSuggest(s.email)} className="sugges-list">
          {s.email}
        </div>
      )}
    </div>
     
    </div>
  );
}

export default Autocomplete;
