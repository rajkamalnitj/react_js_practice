// import React,{Component} from 'react'
// class  Parent extends Component
// {

//   render() {
//     return <h4>Hello</h4>;
//   }
// }

// export default  Parent

import React, { Component } from 'react';
//    import './style.css'
// // This is the function that will be added to the application
// function Display(props) {
//   return (
//   <div>
//   <h1 className='text-white bg-dark'>GeeksForGeeks {props.name}</h1>

//     </div>

//     );
// }

// export default Display;
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      topic :'Mango'
    };

    this.handleChange = this.handleChange.bind(this);
    
    this.handletopicChange = this.handletopicChange.bind(this);

    this.handletopicChange=this.handletopicChange.bind(this);
  }



  
  handleChange= (event)=> {
    this.setState({username: event.target.value});
  }


  handletopicChange= (event)=> {
    this.setState({topic: event.target.value});
  }
  handleSubmit =(event)=>
  {

    alert('Your favorite flavor is: ' + this.state.username +this.state.topic);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1 className="text-white bg-dark">GeeksForGeeks </h1>

        <form onSubmit={this.handleSubmit} >
          <label>username</label>
          <input typr="text" value={this.state.username}   onChange={this.handleChange}  />
<br/>

<label> topic </label>
          <select  value={this.state.topic}    onChange={this.handletopicChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option  value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>



<input type="submit" value="Submit"   />

        </form>
      </div>
    );
  }
}

export default Display;
