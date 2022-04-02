import  "./BackgroundAndTextColorSelector.css";
import React, {useState} from 'react';

const txtColors= [
    {id:"blackTx",classCss:"single-color color-add preto-inverted"},
    {id:"whiteTx",classCss:"single-color color-add branco"},
    {id:"greenTx",classCss:"single-color color-add verde"},
    {id:"blueTx",classCss:"single-color color-add azul"},
    {id:"pinkTx",classCss:"single-color color-add rosa"},
    {id:"redTx",classCss:"single-color color-add vermelho"},
    {id:"purpleTx",classCss:"single-color color-add roxo"},
    {id:"orangeTx",classCss:"single-color color-add laranja"}
]
const disableBkColors = {
    "whiteTx" : ["whiteBk","yellowBk"],
    "blackTx" : ["dkBlueBk","blueBk","dkGreenBk","dkPurpleBk"],
    "greenTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
    "blueTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
    "pinkTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
    "redTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
    "purpleTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
    "orangeTx" : ["redBk","yellowBk","orangeBk","lhtGreyBk","lhtPinkBk","pinkBk","dkBlueBk","blueBk","lhtBlueBk","dkGreenBk","greenBk","lhtGreenBk","dkPurpleBk","purpleBk"],
}

function TextColorSelector(props) {
    const [txtColorSel,setTxtColorSel] =useState(props.selectedTxtColor);

    const selectTxtColorHandler = (event) => {
        let selectedTxtColor = event.target.getAttribute('data-txtcolor');
        setTxtColorSel(selectedTxtColor);
        props.onSelectedTexColor(selectedTxtColor,disableBkColors[selectedTxtColor]);
    };

    return(
        <div>
            <label className="field">Cor do Texto:</label>
            <div className="field-selection">
                {txtColors.map(({id,classCss})=>{
                   return(
                    <div key={id} id={id} data-txtcolor={id} className={ id === txtColorSel ? classCss + " selected": classCss} style={{fontFamily:  id }} onClick={selectTxtColorHandler}></div>
                   )
                  })
                }
            </div>
        </div>
    );
}

export default TextColorSelector;