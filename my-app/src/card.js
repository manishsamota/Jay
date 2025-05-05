import * as React from 'react';
// import './Card.css'

function Card(props) {

    return(

<div class='cardpost'>

 <div class='class="row cards_calss row-cols-1 my-5 row-cols-md-3 g-4 "'>    
  
    <div class="card ">
      <img src={props.cardimage} class="card-img" alt={props.title}/>
      <div class="card-body">
        <h4 class="card-title">{props.title}</h4>
        <a class='link' href={props.url} > View Source  </a>
        <div class="card-text"> {props.creator}</div>
    
    </div>
  </div>

 
  </div>
  </div> 

    );
    
}

export default Card;