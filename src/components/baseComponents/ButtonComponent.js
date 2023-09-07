import React from 'react';
import { Button } from "react-bootstrap";

function ButtonComponent(props) {

  const handleClick = (event) => {
    props.btnClick(event.target.name,props.id);
  }

  return (
    <div className="Input_Box">
      <Button name={props.ButtonName} variant={props.variant} style={{margin:'10px'}} onClick={(e)=>handleClick(e)}>{props.ButtonText}</Button>
    </div>
  );
}
export default ButtonComponent;