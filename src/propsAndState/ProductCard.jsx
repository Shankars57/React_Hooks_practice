import React from 'react'

const ProductCard = ({name,price}) => {
  let options={
    backgroundColor:'red',
    color:"white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    margin:'20px'
  }
  return (
    <div style={options}>
      Mobile name : {name}<br></br>
      Mobile price : {price}
    </div>
  )
}

export default ProductCard
