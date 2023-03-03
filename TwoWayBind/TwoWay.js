import React, { useState } from 'react'

function TwoWay() {
    const [product , setProduct] = useState({Name : "" , Price : 0 , City : "" , Stock :true});

    function ChangeName(e){
      setProduct({...product , Name : e.target.value});
    }

    function ChangePrice(e){
      setProduct({...product , Price : e.target.value});  
    }

    function ChangeCity(e){
      setProduct({...product , City : e.target.value});  
    }

    function ChangeStock(e){
      setProduct({...product , Stock : e.target.value});  
    }
    console.log(product);
  return (
    <div>
      <span className="d-grid align-items-center justify-content-center">
        <div className='col-3'>
            <dl>
                <dt>Product Name</dt>
                <dd><input type ="text" value={product.Name} onChange={ChangeName} /></dd>
                <dt>Price</dt>
                <dd><input type ="number" value={product.Price} onChange={ChangePrice} /></dd>
                <dt>City</dt>
                <dd><input type ="text" value={product.City} onChange={ChangeCity} /></dd>
                <dt>Stock</dt>
                <dd><input type ="checkbox" value={(product.Stock)? true : false} onChange={ChangeStock} /></dd>
            </dl>
        </div>
      </span>
    </div>
  )
}

export default TwoWay
