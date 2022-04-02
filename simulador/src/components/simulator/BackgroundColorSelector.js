import "./BackgroundAndTextColorSelector.css";
import React, {useState} from 'react';

const bkColors= [
    {id:"whiteBk",classCss:"single-color color-add branco"},
    {id:"redBk",classCss:"single-color color-add vermelhobk"},
    {id:"yellowBk",classCss:"single-color color-add amarelo"},
    {id:"orangeBk",classCss:"single-color color-add laranja"},
    {id:"lhtGreyBk",classCss:"single-color color-add cinzacl"},
    {id:"lhtPinkBk",classCss:"single-color color-add rosacl"},
    {id:"pinkBk",classCss:"single-color color-add rosabk"},
    {id:"dkBlueBk",classCss:"single-color color-add azules"},
    {id:"blueBk",classCss:"single-color color-add azulbk"},
    {id:"lhtBlueBk",classCss:"single-color color-add azulcl"},
    {id:"dkGreenBk",classCss:"single-color color-add verdees"},
    {id:"greenBk",classCss:"single-color color-add verdebk"},
    {id:"lhtGreenBk",classCss:"single-color color-add verdecl"},
    {id:"dkPurpleBk",classCss:"single-color color-add roxoes-inverted"},
    {id:"purpleBk",classCss:"single-color color-add roxo"}
]


function BackgroundColorSelector(props) {
    //console.log(props.disableColors.indexOf("black"));
    const [bkColorSel,setBkColorSel] =useState(props.selectedBkColor);
    
    const selectBkColorHandler = (event) => {
        let selectedBkColor = event.target.getAttribute('data-bkcolor');
        setBkColorSel(selectedBkColor);
        props.onSelectedBkColor(selectedBkColor);
    };

    return (
        <div> 
            <label className="field">Cor do Fundo:</label>
            <div className="field-selection">
                {bkColors.map(({id,classCss})=>{
                    return(
                        <div key={id} id={id} data-bkcolor={id} className={
                             id === bkColorSel ? 
                             (props.disableColors.indexOf(id) > -1 ? classCss + " not-allowed" : classCss + " selected") :
                             props.disableColors.indexOf(id) > -1 ? classCss + " not-allowed": classCss
                             } 
                        onClick={selectBkColorHandler}></div>
                    )
                    })
                }
            </div>
        </div> 
    );
}

export default BackgroundColorSelector;