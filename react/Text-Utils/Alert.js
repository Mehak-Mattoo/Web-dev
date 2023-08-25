import React from 'react'

export default function Alert(props) {

const capitalized=()=>{// to capitalize the first letter of alert type
 
 return  props.alert.type.charAt(0).toUpperCase()+props.alert.type.slice(1);
}

// if props.alert becomes true, only then rest of the code will execute
  return (
    <div style={{height:"3rem"}}>

 { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalized(props.alert.type)}</strong> :{props.alert.msg}
 
</div>}</div>
  
  )
}