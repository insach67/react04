import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Time=()=>{
const time=new Date().toLocaleTimeString()
return(<>
   <h1 className='text'>Web App Clock</h1>
<div className='container'>
  <div className='inside_container'>
  <h1 id='time'>Time:{time}</h1>
  </div>

</div>
  
  </>
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <>
      <App />
      <Time/>
    </>
  );
  
}, 1000);

