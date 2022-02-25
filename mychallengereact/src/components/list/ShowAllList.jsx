import React, { Component } from 'react';
import axios from 'axios';
import Repos from '../repos/Repos';



export default class ShowAllList extends Component {
  constructor(props){
    super(props);

    this.state ={
        alllists :[],
   
         
    }
}

componentDidMount = () =>{
axios.get('http://api.github.com/users/Fatih90FM91?client_id=8b7844e8734d419ac1fc&client_secret=cfec32ff9c287311e23f68757a80ba55db58f69d&sort=create')
.then(result => (this.setState({alllists:result.data})))
.catch(err => console.log(err))
}




render() {

  console.log(this.state.alllists);

return (

  <div className="alllist">   
     <div className='header-section'>
     <img src={this.state.alllists.avatar_url} alt="" />
     <div className='user-infos'>
       <p><strong>FullName:</strong> {this.state.alllists.name}</p>
       <p><strong>UserName:</strong> {this.state.alllists.login}</p>
       <p><strong>Location:</strong> {this.state.alllists.location}</p>
       <p><strong>Email Adress:</strong> {this.state.alllists.email}</p>
     </div>
     </div>
   <h2>User Repository</h2>
   

 <Repos/>

  </div>
)
}
}
