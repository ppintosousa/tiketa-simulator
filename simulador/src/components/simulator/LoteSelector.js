
import React, { useState } from 'react';
import './LoteSelector.css';

//container principal para selecção dos tipos de letra
// argumentos: 
// fieldTitle - titulo do campo
// array de objectos com o id(id) e valor(font)

function LoteSelector(props){
    const [loteSelected,setLoteSelected] = useState(props.lote);

    const selectLoteHandler = (event) => {
        let selectedLote = event.target.getAttribute('data-lote');
        setLoteSelected(selectedLote);
        props.onSelectedLote(selectedLote);
    }
   
    return(
        <div>
            <label className="field">{props.title}</label>
            <div className="field-selection">
                {props.options.map(el => <div key={el.id} id={el.id} data-lote={el.id} className={ el.id === loteSelected ? "single-font selected" : "single-font"} onClick={selectLoteHandler}>{el.lote}</div> )}
            </div>
        </div>
    );
}

export default LoteSelector;