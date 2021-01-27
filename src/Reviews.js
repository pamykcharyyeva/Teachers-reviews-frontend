import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Review from './Review'

class Reviews extends React.Component {
   render(){
     return (
       <h1> this is all reviews</h1>
      <Review />
     )
   }
}

export default Reviews