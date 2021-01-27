import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Teacher from '../Teacher'
import {connect} from 'react-redux'


class AllTeachersPage extends React.Component {
   render(){
     return (
        <h1>this is all AllTeachersPage</h1>
    
     )
   }
}


function mapStateToProps(state){

   return{
      teachers: state.teachers
   }
 }
 
export default connect(mapStateToProps)(AllTeachersPage);
