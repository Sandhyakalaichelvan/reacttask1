import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Sample extends React.Component

{
    constructor(props)
    {
       super(props)
       this.state = {value:''}
       this.boxChange = this.boxChange.bind(this)
  
    }
    boxChange(a)
      {
          this.setState({value: a.target.value})
      }
    
    render()
    {
     return <>
     <h1 className='bb'>INPUT</h1>
     <h1 className='aa'>OUTPUT</h1>
     <textarea className='txt' onChange={this.boxChange} value={this.state.value}></textarea>
     <textarea className='box' value={this.state.value}></textarea>
     </>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>)



