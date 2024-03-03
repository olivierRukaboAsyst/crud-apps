import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Product() {

  const [products, setProducts] = useState([
    { id:1, name:"Eau kinju 0.7L", price:1000, checked:true },
    { id:2, name:"Jus tangawizi", price:1500, checked:true },
    { id:3, name:"Eau Kandi 1.5L", price:1500, checked:false },
    { id:4, name:"Jus Energy", price:1500, checked:false }
  ]);

  return (
    <div className="p-1 m-1">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th><th>Name</th><th>Price</th><th>Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn btn-outline-success">
                          <FontAwesomeIcon icon={product.checked?faCheckCircle:faCircle}></FontAwesomeIcon>
                        </button>
                      </td>
                      <td>
                        <button className='btn btn-outline-danger'>
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
