import React, { useState } from 'react'

function ArrFilter() {
  const places = {"status":true,"data":[{"city":"Delhi","addressComponent":[{"address1":"Uttam Nagar","address2":"Uttam Nagar East","pin":"110059","country":"India"}]},{"city":"Charlotte","addressComponent":[{"address1":"NoDa","address2":"NoDa","pin":"765869","country":"United States"}]},{"city":"Noida","addressComponent":[{"address1":"noida","address2":"Noida","pin":"201301","country":"India"},{"address1":"Sector 8","address2":"C Block","pin":"201301","country":"India"},{"address1":"Sector 67","address2":"Block B","pin":"201301","country":"India"},{"address1":"Noida","address2":"Noida","pin":"201301","country":"India"}]}]}
  return (
    <div>
     {
      places.data.map(elem => 
        <h2>{elem.city}</h2>
        )
     }
    </div>
  )
}

export default ArrFilter
