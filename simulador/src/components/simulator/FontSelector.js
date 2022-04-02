import React, {useState} from 'react';
import './FontSelector.css';

function FontSelector(props){

    const [fontSelected,setFontSelected]=useState(props.selectedFont);

    const selectFontHandler = (event) => {
        let selectedFont = event.target.getAttribute('data-txtfont');
        setFontSelected(selectedFont);
        props.onSelectedFont(selectedFont);
    };

    return(
        <div>
            <label className="field">{props.title}</label>
            <div className="field-selection">
                {props.options.map(el => <div key={el.id} id={el.id} data-txtfont={el.id} className={ el.id === fontSelected ? "single-font selected" : "single-font"} style={{fontFamily: el.font}} onClick={selectFontHandler}>{el.font}</div> )}
            </div>
        </div>
    );
}

export default FontSelector;