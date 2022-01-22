import React,{Component} from 'react'
 class Counter extends Component
 {



  constructor(props)
  {
  
     super(props)
     this.state={

count:0

     }
     const {name}=this.props.name;
  }
   increment(props)
   {
       this.setState(
          {
             count : this.state.count+5
              

          },()=>
          {

             console.log('call back value', this.state.count,this.props.name);

          }
       )


   }

  render(){
    return(
<div>

<div> count -{this.state.count}</div>
<button onClick={() => this.increment(this.props)} > increment</button>
</div>
    )
 }

 }
  
 export default  Counter