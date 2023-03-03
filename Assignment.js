import React ,{useState} from 'react'


function Assignment() {
    const [nameArr, setNameArr] = useState([
        "name1",
        "name2",
        "name3",
        "name4",
        "name5"
      ]);
      
  return (
    <div>
       <ul>
        {
            nameArr.map(item => 
                <li id={item} onClick={(e)=> setNameArr(nameArr.filter(item => item !== e.target.id ))} key={item}>{item}</li>
                )
        }
       </ul>
    </div>
  )
}

export default Assignment
