import React from 'react'
import { useState } from 'react'

function List() {
    const [item , setItem] = useState('');
    const [data , setData] = useState([]);
    const [isEdite , setIsEdit] = useState(true);
    const [editData , setEditData] = useState(null)
    function addItem(e){
       setItem(e.target.value)
    }

    const handleSubmit = () => {
        if(!item){
          alert('please add data');
        }
        else if(item && !isEdite){
           setData(
            data.map((elem) => {
              if(elem.id === editData){
                return {...elem , Name : item}
              }
              return elem ;
            })
           )
           setIsEdit(true);
        }
        else{
            const updatedItem = {id : new Date().getTime().toString(), Name : item}
            setData((prevData) => {
                return [...prevData , updatedItem]
            });
        }
        console.log(data)
        setItem('');
    }

    function deleteItem(e){
        const filterdData = data.filter((elem) => {
           return elem.id !== e.target.id
        })
        setData(filterdData);
    }
     
    function editItem(e){
      const forUpdate = data.find((item) => {
        return item.id === e.target.id ;
      })
      console.log(forUpdate);
      setItem(forUpdate.Name)
      setIsEdit(false);
      setEditData(e.target.id)
    }
    console.log(editData);
    console.log(data);
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center text-center'>
        <div className='m-5 p-5'>
           <input type="text" value={item} onChange={addItem} />
           {
            (isEdite) ? <button onClick={() => handleSubmit()}>Submit</button> : <button onClick={() => handleSubmit()}>Edite</button>
           }
        </div>
      </div>
      <div>
         {
            data.map((item)  => {
                return(
                <div key={item.id} className='d-flex justify-content-center justify-content-evenly mt-5'>
                    <h2>{item.Name}</h2>
                    <button id={item.id} onClick={deleteItem}>Delete</button>
                    <button id={item.id} onClick={editItem}>Edit</button>
                </div>
                )
                
            })
         }
      </div>
    </div>
  )
}

export default List
