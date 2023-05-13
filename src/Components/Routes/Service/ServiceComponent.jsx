import React from 'react'

function ServiceComponent() {
  return (
    <div>  
            <form action ="/users"method="post">
    <label for ="firstname">Firstname </label>
                <input type="text" id="firstname"name="firstname"required/>
                <button type="submit">submit</button>
           
        </form> 
</div>
  )}


export default ServiceComponent