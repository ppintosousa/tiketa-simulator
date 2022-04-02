import React,{useState} from 'react';
import "./InputFieldSelector.css";

function InputFieldSelector(props){
    const fieldId=props.id;

    const [objectFieldValue,setObjectFieldValue]=useState({
        fieldId: fieldId,
        fieldValue: ''
    });
    
    const changeHandler = (event) => {
        setObjectFieldValue({
            fieldId: fieldId,
            fieldValue: event.target.value
        });
        props.onEnteredText(event.target.value);
    }
    return(
    <div>
        <label className="field">{props.title}</label>
        <div >
            <input type="text" maxLength={props.maxlength} id={props.id} className="input-text" value={objectFieldValue.fieldValue} onChange={changeHandler}/>
        </div>
    </div>
    );
}

export default InputFieldSelector; 