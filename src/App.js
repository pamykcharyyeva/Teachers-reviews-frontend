import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import reducer from './reducer'
import './App.css';
import AllTeachersPage from './containers/AllTeachersPage'

class App extends React.Component {
   render(){
     return (
      <Router>
        <div>
         <AllTeachersPage/>
     
        </div>
      </Router>
     )
   }
}

function mapStateToProps(state){
  return(state)
  
}

export default connect(mapStateToProps)(App);