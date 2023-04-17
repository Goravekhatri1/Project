import React from 'react'

const Area = (props) => {
// const area = [
//         {
//         img : "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
//      name :"Gulshan-e-Haider",
//    } ,
//    {
//     img : "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1477&q=80",
//     name : "Noman Town"
//    }

// ]

  return (
<div class="card mx-auto mt-4" style={{width: "18rem"}}>
  <img src={props.img} class="card-img-top rounded-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    
    <a href="#" class="btn btn-primary">View More</a>
  </div>
</div>
  )
}

export default Area