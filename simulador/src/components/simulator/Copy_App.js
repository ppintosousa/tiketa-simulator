import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Row ,Col, Container} from 'react-bootstrap';
import NewLabelForm from './components/simulator/NewLabelForm';
import LabelSimulation from './components/simulator/LabelSimulation';
import React,{useState} from 'react';

let formData = {
    linha1: "",
    linha2: "",
    linha3: "",
    linhaLC: "",
    linhaLCM: "",
    icon: "drc00",
    bkColor: "",
    txtColor: "",
    theme: "",
    model: "",
    txtFont: "TL1",
    labelType: "REG",
    disableBkColors : "",
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


function App() {

    const [labelData,setLabelData]=useState(formData);
    
    const updatePrintDataHandler = (objectData) => {
        setLabelData({
            linha1: objectData.linha1,
            linha2: objectData.linha2,
            linha3: objectData.linha3,
            linhaLC: objectData.linhaLC,
            linhaLCM: objectData.linhaLCM,
            icon: objectData.icon,
            theme: objectData.theme,
            model: objectData.model,
            txtColor : objectData.txtColor,
            txtFont : objectData.txtFont,
            bkColor : objectData.bkColor,
            labelType : objectData.labelType,
            disableBkColors : objectData.disableBkColors,
            lote : objectData.lote,
            iconEsq : objectData.iconEsq,
            backColorEsq : objectData.backColorEsq,
            fontColorEsq : objectData.fontColorEsq,
            iconDir : objectData.iconDir,
            backColorDir : objectData.backColorDir,
            fontColorDir : objectData.fontColorDir,
            labelSimulationType : objectData.labelSimulationType,
            quantity : objectData.quantity
        });
    };
    
  return (
    <div>
      <Container>
      <Row>
        <Col>simulação
            <LabelSimulation labelConfig={labelData} />
        </Col>           
        <Col>Parametros da simulação
            <NewLabelForm onChangeForm={updatePrintDataHandler}/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
