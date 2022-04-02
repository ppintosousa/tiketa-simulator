import BackgroundColorSelector from "./BackgroundColorSelector";
import IconSelector from "./IconSelector";
import InputFieldSelector from "./InputFieldSelector";
import FontSelector from "./FontSelector";
import ProductDescription from "./ProductDescription";
import QuantityAndSubmitPanel from "./QuantityAndSubmitPanel";
import TextColorSelector from "./TextColorSelector";
import ThemeSelector from "./ThemeSelector";
import {Tabs, Tab} from 'react-bootstrap';
import React from 'react';
import LoteSelector from "./LoteSelector";
import ModelSelector from "./ModelSelector";


const inputFieldLinha1Title="Linha 1: (max: 20 carateres)"
const inputFieldLinha2Title="Linha 2: (max: 20 carateres)"
const inputFieldLinha3Title="Linha 3: (max: 20 carateres)"
const inputFieldLCTitle="Lapis e Canetas:(max: 30 carateres)"
const inputFieldLCMTitle="Lapis e Canetas Mini:(max: 20 carateres)"

const productTitle="Termoaderentes Tamanho Regular - 4,6x1,2 cm";
const productShortDescription = "Etiquetas termoaderentes tamanho regular(4,6x1,2cms) para marcar roupas.\n Lote 100 unidades - 9,99€ \n Lote 40 unidades - 6,60€";

const fontFieldTitle="Tipos de Letra:";
const fontFieldOptions=[
        {
            "id":"TL1",
            "font":"TL1"
        },
        {
            "id":"TL2",
            "font":"TL2"
        },
        {
            "id":"TL3",
            "font":"TL3"
        },
        {
            "id":"TL4",
            "font":"TL4"
        },
        {
            "id":"TL5",
            "font":"TL5"
        },
        {
            "id":"TL6",
            "font":"TL6"
        },
        {
            "id":"TL7",
            "font":"TL7"
        },
        {
            "id":"TL8",
            "font":"TL8"
        }   
];
const loteFieldTitle="Lote:";
const loteFieldOptions=[
        {
            "id":"LT1",
            "lote":"100 Etiquetas - 9,99€"
        },
        {
            "id":"LT2",
            "lote":"40 Etiquetas - 6,60€"
        }   
];
let formData = {
    linha1: "",
    linha2: "",
    linha3: "",
    linhaLC: "",
    linhaLCM: "",
    icon: "drc00",
    bkColor: "whitebk",
    txtColor: "blackTx",
    theme: "tema1",
    txtFont: "TL1",
    model: "both",
    labelType: "REG",
    disableBkColors : ["dkBlueBk","blueBk","dkGreenBk","dkPurpleBk"],
    lote : "",
    iconEsq : "drc38",
    backColorEsq : "rgb(255,255,255)",
    fontColorEsq : "rgb(233,117,117)",
    iconDir : "drc159",
    backColorDir : "rgb(228,242,241)",
    fontColorDir : "rgb(233,117,117)",
    labelSimulationType : "themes",
    quantity : 1,
};
export default function NewLabelForm (props) {
    
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submit");
        console.log(formData);
        console.log("fim submit");
    };
    const enteredlinha1Handler = (enteredLinha1Data) => {
        formData.linha1=enteredLinha1Data;
        props.onChangeForm(formData);
    };
    const enteredlinha2Handler = (enteredLinha2Data) => {
        formData.linha2=enteredLinha2Data;
        props.onChangeForm(formData);
    };
    const enteredlinha3Handler = (enteredLinha3Data) => {
        formData.linha3=enteredLinha3Data;
        props.onChangeForm(formData);
    };
    const enteredlinhaLCHandler = (enteredLinhaLCData) => {
        formData.linhaLC=enteredLinhaLCData;
        props.onChangeForm(formData);
    };
    const enteredlinhaLCMHandler = (enteredLinhaLCMData) => {
        formData.linhaLCM=enteredLinhaLCMData;
        props.onChangeForm(formData);
    };
    const selectedIconHandler = (selectedIcon) => {
        formData.icon = selectedIcon;
        props.onChangeForm(formData);
    };
    const selectedThemeHandler = (selectedTheme,iconEsq,backColorEsq,fontColorEsq,iconDir,backColorDir,fontColorDir) => {
        formData.theme = selectedTheme;
        formData.iconEsq = iconEsq;
        formData.backColorEsq = backColorEsq;
        formData.fontColorEsq = fontColorEsq;
        formData.iconDir = iconDir;
        formData.backColorDir = backColorDir;
        formData.fontColorDir = fontColorDir;
        props.onChangeForm(formData);
    };
    const selectedModelHandler = (selectedModel) => {
        formData.model = selectedModel;
        props.onChangeForm(formData);
    };
    const selectedTextColorHandler = (selectedTextColor,disabledBkColorArray) => {
        formData.txtColor = selectedTextColor;
        formData.disableBkColors=disabledBkColorArray;
        // tenho de verificar se a cor do texto e do background são compativeis ,
        // caso não sejam tenho de mudar a cor de fundo, caso não sejam faço reset
        selectedTextColor==="whiteTx" ? formData.bkColor="redBk" : formData.bkColor="whiteBk";
        props.onChangeForm(formData);
    };
    const selectedBkColorHandler = (selectedBkColor) => {
        formData.bkColor = selectedBkColor;
        props.onChangeForm(formData);
    };
    const selectedFontHandler = (selectedFont) => {
        formData.txtFont = selectedFont;
        props.onChangeForm(formData);
    };
    const selectedLoteHandler = (selectedLote) => {
        formData.lote = selectedLote;
        props.onChangeForm(formData);
    };
    const selectedLabelTabHandler = (event) => {
        //alert(event);
        formData.labelSimulationType=event;
        //event==="themes" ? formData.labelSimulationType="themes" : formData.labelSimulationType="icon"; 
        props.onChangeForm(formData);
    }
    const enteredQuantity = (enteredQuantity) => {
        formData.quantity=enteredQuantity;
        props.onChangeForm(formData);
    }


    return(
        <form onSubmit={submitHandler}>
            <ProductDescription title={productTitle} description={productShortDescription}/>    
            <Tabs onSelect={selectedLabelTabHandler} >
                <Tab eventKey="themes" title="Temas Pré-definidos" >
                    <ThemeSelector selectedTheme={formData.theme} onSelectedTheme={selectedThemeHandler}/>
                    <ModelSelector selectedModel={formData.model} onSelectedModel={selectedModelHandler}/>
                </Tab>
                <Tab eventKey="icons" title="Personalize a Gosto">
                    <IconSelector selectedIcon={formData.icon} onSelectedIcon={selectedIconHandler}/>
                    <TextColorSelector selectedTxtColor={formData.txtColor} onSelectedTexColor={selectedTextColorHandler}/>
                    <BackgroundColorSelector disableColors={formData.disableBkColors} selectedBkColor={formData.bkColor} onSelectedBkColor={selectedBkColorHandler}/>
                </Tab>
            </Tabs>
            <InputFieldSelector title={inputFieldLinha1Title} id="linha1" onEnteredText={enteredlinha1Handler} maxlength="20"/>
            <InputFieldSelector title={inputFieldLinha2Title} id="linha2" onEnteredText={enteredlinha2Handler} maxlength="20"/>
            <InputFieldSelector title={inputFieldLinha3Title} id="linha3" onEnteredText={enteredlinha3Handler} maxlength="20"/>
            <InputFieldSelector title={inputFieldLCTitle} id="linhaLC" onEnteredText={enteredlinhaLCHandler} maxlength="30"/>
            <InputFieldSelector title={inputFieldLCMTitle} id="linhaLCM" onEnteredText={enteredlinhaLCMHandler} maxlength1="20"/>
            <FontSelector selectedFont={formData.txtFont} title={fontFieldTitle} options={fontFieldOptions} onSelectedFont={selectedFontHandler} />
            <LoteSelector selectedLote={formData.lote} title={loteFieldTitle} options={loteFieldOptions} onSelectedLote={selectedLoteHandler}/>
            <QuantityAndSubmitPanel quantity={formData.quantity} onEnteredQuantity={enteredQuantity}/>
        </form>    
    );
}