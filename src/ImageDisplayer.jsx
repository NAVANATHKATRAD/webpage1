import React from 'react'
import arr from './data/images'
const ImageDisplayer = () => {
  return (
    <div>
      (parameter) ele: string
      {arr.map(function(ele){
        return <img src={ele}
        style ={{Width:"200px",height:"200px"}} alt= " "/>
      })}
      {/*<img src = {arr[0]} style = {{width:"150 px" ,height: "150px" }} alt= ". ."/>
       <img src = {arr[1]} style = {{width:"150 px" ,height: "150px" }} alt= ". ."/>
       <img src = {arr[2]} style = {{width:"150 px" ,height: "150px" }} alt= ". ."/>
       <img src = {arr[3]} style = {{width:"150 px" ,height: "150px" }} alt= ". ."/>
  */}


      
        <img src ="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400 " alt=".."/>
    </div>
  )
}

export default ImageDisplayer