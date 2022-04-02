import React,{useState} from 'react';
import './QuantityAndSubmitPanel.css';

export default function QuantityAndSubmitPanel(props) {
    const [quantity,setQuantity]=useState(props.quantityValue);

    const changeQuantityHandler = (event) => {
        setQuantity(event.target.value);
        props.onEnteredQuantity(event.target.value);
    }

    return (
        <div>
            <label className="field fieldset">Qtd</label>
            <input type="number" name="qty"  min="1" value={props.quantity} className="input-text qty" onChange={changeQuantityHandler}/>
            <button type="submit" title="Comprar" className="action primary"><span>Comprar</span></button>
        </div>                  
    );
}