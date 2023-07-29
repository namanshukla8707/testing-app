
import React from 'react'
type GreatProps = {
  name?: String,

}
const Greet = (props:GreatProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet
