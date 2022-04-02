import "./LabelSimulation.css";
import React from 'react';
import { Card } from "react-bootstrap";

const txtColorObj = {
    "redTx" : "rgb(241, 38, 51)",
    "blackTx" : "rgb(0, 0, 0)",
    "whiteTx" : "rgb(255, 255, 255)",
    "greenTx" : "rgb(105, 192, 108)",
    "blueTx" : "rgb(22, 142, 206)",
    "pinkTx" : "rgb(237, 112, 166)",
    "purpleTx" : "rgb(134, 67, 173)",
    "orangeTx" : "rgb(243, 100, 33)",
}
const bkColorObj = {
    "whiteBk" : "rgb(255, 255, 255)",
    "redBk" : "rgb(232, 32, 39)",
    "yellowBk" : "rgb(255, 238, 0)",
    "orangeBk" : "rgb(243, 100, 33)",
    "lhtGreyBk" : "rgb(168, 169, 172)",
    "lhtPinkBk" : "rgb(246, 172, 195)",
    "pinkBk" :"rgb(255, 43, 181)",
    "dkBlueBk" : "rgb(24, 71, 157)",
    "blueBk" : "rgb(0, 119, 178)",
    "lhtBlueBk" : "rgb(106, 208, 248)",
    "dkGreenBk" : "rgb(17, 148, 65)",
    "greenBk" : "rgb(67, 176, 72)",
    "lhtGreenBk" : "rgb(127, 194, 65)",
    "dkPurpleBk" : "rgb(95, 45, 145)",
    "purpleBk" : "rgb(132, 101, 172)",
}
const paramLabel = {
    "REG" : {
             "TL1" : {
                       "SEM_ICON" :{
                                    "1_linha_size_ini": 18,
                                    "1_linha_length" : 14,
                                    "2_linha_length" : 14,
                                    "1_linha_min_size" : 14.5,
                                    "2_linha_min_size" : 11.5,
                                    "2_linha_size_ini": 16
                        },
                        "COM_ICON" :{
                                     "1_linha_size_ini": 17,
                                     "1_linha_length" : 11,
                                     "2_linha_length" : 11,
                                     "1_linha_min_size" : 11,
                                     "2_linha_min_size" : 11.5,
                                     "2_linha_size_ini": 16
                        },                
            },
            "TL2" : {
                "SEM_ICON" :{
                             "1_linha_size_ini": 20,
                             "1_linha_length" : 16,
                             "1_linha_min_size" : 16,
                             "2_linha_size_ini": 18,
                             "2_linha_length" : 14,
                             "2_linha_min_size" : 11.5    
                 },
                 "COM_ICON" :{
                              "1_linha_size_ini": 18,
                              "1_linha_length" : 16,
                              "1_linha_min_size" : 16,
                              "2_linha_size_ini": 16,
                              "2_linha_length" : 11,
                              "2_linha_min_size" : 16
                 },                
            },
            "TL3" : {
                "SEM_ICON" :{
                             "1_linha_size_ini": 20,
                             "1_linha_length" : 16,
                             "1_linha_min_size" : 16,
                             "2_linha_size_ini": 18,
                             "2_linha_length" : 16,
                             "2_linha_min_size" : 11.5
                 },
                 "COM_ICON" :{
                              "1_linha_size_ini": 18,
                              "1_linha_length" : 13,
                              "1_linha_min_size" : 14,
                              "2_linha_size_ini": 18,
                              "2_linha_length" : 13,
                              "2_linha_min_size" : 14   
                 },                
            },
    },

}

export default function LabelSimulation (props) {  
  console.log(props.labelConfig);
    let linha1,linha2,linha3,iconSrc,icon,fontSizeL1_1,fontSizeL1_2,fontSizeL2_2;
    let c_s_icon;
    if(props.labelConfig.linha2 !== "") {
       linha2 = props.labelConfig.linha1;
       linha3 = props.labelConfig.linha2;
       linha1=""
    } else {
       linha1=props.labelConfig.linha1;
    }
    icon = props.labelConfig.icon;
    iconSrc = "icons/" + icon + ".png";
    fontSizeL1_1="18pt";
    fontSizeL1_2="16pt";
    fontSizeL2_2="16pt";

    const setFontSize= (configuration) => {
        // *****************************
        // set fontsize for labels .....
        //****************************** 
        if(configuration.icon==="drc00" && props.labelConfig.labelSimulationType==="icons" ) {
            c_s_icon = "SEM_ICON";
        } else {
            c_s_icon = "COM_ICON";    
        }
        if(configuration.linha2.trim().length===0) {
            // 1 linha
            if(configuration.linha1.length > paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["1_linha_length"]) {
                fontSizeL1_1=Math.max(paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["1_linha_size_ini"]-(configuration.linha1.length-paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["1_linha_length"])/2,paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["1_linha_min_size"]) + "pt";
            } else { 
                fontSizeL1_1=paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["1_linha_size_ini"] + "pt";
            }
        } else {
            // 2 linhas
            if(Math.max(configuration.linha1.length,configuration.linha2.length) > paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_length"] ) {
                fontSizeL1_2=Math.max(paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_size_ini"]-(Math.max(configuration.linha1.length,configuration.linha2.length)-paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_length"])/2,paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_min_size"]) + "pt";
                fontSizeL2_2=fontSizeL1_2;
            } else { 
                fontSizeL1_2=paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_size_ini"] + "pt";
                fontSizeL2_2=paramLabel[configuration.labelType][configuration.txtFont][c_s_icon]["2_linha_size_ini"] + "pt";
            }
        }
    }

   
    setFontSize(props.labelConfig);

    console.log("1 linha" + fontSizeL1_1);
    console.log("1ª de 2 linha" + fontSizeL1_2);
    console.log("2ª de 2 linha" + fontSizeL2_2);

    
   return(
        <div className="col d-flex justify-content-center align-middle"> 
        <Card className="labelSimulationCard">
            <div className="label-reg" style={{background: props.labelConfig.labelSimulationType==="icons" ? bkColorObj[props.labelConfig.bkColor] : props.labelConfig.backColorEsq,display: (props.labelConfig.labelSimulationType ==="themes" && props.labelConfig.model ==="right") ? "none" : "" }}>
                <div className="label-reg-brand" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorEsq}}>tiketa.pt</div>
                <div className="iconleft"><img id="iconLeft" alt="labelIcon" className="iconleft" src={props.labelConfig.labelSimulationType==="icons" ? iconSrc : "icons/" + props.labelConfig.iconEsq + ".png"} style={{display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":""}}/></div>
                <div className="label-reg-l1-sicon" style={{color: txtColorObj[props.labelConfig.txtColor],fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "":"none",fontSize: fontSizeL1_1}}>{linha1}</div>
                <div className="label-reg-l2-sicon" style={{color: txtColorObj[props.labelConfig.txtColor],fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "":"none",fontSize: fontSizeL1_2}}>{linha2}</div>
                <div className="label-reg-l3-sicon" style={{color: txtColorObj[props.labelConfig.txtColor],fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "":"none",fontSize: fontSizeL2_2}}>{linha3}</div>
                <div className="label-reg-l1-cicon" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorEsq,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":"",fontSize: fontSizeL1_1}}>{linha1}</div>
                <div className="label-reg-l2-cicon" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorEsq,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons")? "none":"",fontSize: fontSizeL1_2}}>{linha2}</div>
                <div className="label-reg-l3-cicon" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorEsq,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":"",fontSize: fontSizeL2_2}}>{linha3}</div>
            </div>
            <div className="label-reg" style={{background: props.labelConfig.labelSimulationType==="icons" ? bkColorObj[props.labelConfig.bkColor] : props.labelConfig.backColorDir,display: (props.labelConfig.labelSimulationType ==="icons" || (props.labelConfig.labelSimulationType ==="themes" && props.labelConfig.model ==="left")) ? "none" : ""}}>
                <div className="label-reg-brand-dir" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorDir}}>tiketa.pt</div>
                <div className="iconright"><img id="iconRight" alt="labelIcon" className="iconright" src={props.labelConfig.labelSimulationType==="icons" ? iconSrc : "icons/" + props.labelConfig.iconDir + ".png"} style={{display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":""}}/></div>
                <div className="label-reg-l1-cicon-right" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorDir,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":"",fontSize: fontSizeL1_1}}>{linha1}</div>
                <div className="label-reg-l2-cicon-right" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorDir,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons")? "none":"",fontSize: fontSizeL1_2}}>{linha2}</div>
                <div className="label-reg-l3-cicon-right" style={{color: props.labelConfig.labelSimulationType==="icons" ? txtColorObj[props.labelConfig.txtColor]:props.labelConfig.fontColorDir,fontFamily: props.labelConfig.txtFont,display: (icon === "drc00" && props.labelConfig.labelSimulationType==="icons") ? "none":"",fontSize: fontSizeL2_2}}>{linha3}</div>
            </div>
         </Card>
         </div>
    );

}