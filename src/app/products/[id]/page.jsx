import React from 'react'

function ProductCard({ params }) {

  const { id } = params

  return (
    <div>{id}</div>
  )
}

export default ProductCard