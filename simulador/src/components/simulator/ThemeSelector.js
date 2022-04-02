import "./ThemeSelector.css";
import React, {useState} from 'react';



const temas= [
    {id:"tema1",image:"themes/tema1.png",iconEsq:"drc38", backColorEsq:"rgb(255,255,255)",fontColorEsq:"rgb(233,117,117)",iconDir:"drc159", backColorDir:"rgb(228,242,241)",fontColorDir:"rgb(233,117,117)"},
    {id:"tema2",image:"themes/tema2.png",iconEsq:"drc50", backColorEsq:"rgb(98,132,171)",fontColorEsq:"rgb(241,200,133)",iconDir:"drc49", backColorDir:"rgb(255,255,255)",fontColorDir:"rgb(86,132,134)"},
    {id:"tema3",image:"themes/tema3.png",iconEsq:"", backColorEsq:"",ColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema4",image:"themes/tema4.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema5",image:"themes/tema5.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema6",image:"themes/tema6.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema7",image:"themes/tema7.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema8",image:"themes/tema8.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema9",image:"themes/tema9.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema10",image:"themes/tema10.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema11",image:"themes/tema11.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema12",image:"themes/tema12.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema13",image:"themes/tema13.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema14",image:"themes/tema14.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema15",image:"themes/tema15.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""},
    {id:"tema16",image:"themes/tema16.png",iconEsq:"", backColorEsq:"",fontColorEsq:"",iconDir:"", backColorDir:"",fontColorDir:""}
]

export default function ThemeSelector (props) {

    const [themeSel,setThemeSel] =useState(props.selectedTheme);
    
    const selectThemeHandler = (event) => {
        let selectedTheme= event.target.getAttribute('data-theme');
        let iconDir = event.target.getAttribute('data-icondir');
        let iconEsq = event.target.getAttribute('data-iconesq');
        let backColorDir = event.target.getAttribute('data-backcolordir');
        let backColorEsq = event.target.getAttribute('data-backcoloresq');
        let fontColorDir = event.target.getAttribute('data-fontcolordir');
        let fontColorEsq = event.target.getAttribute('data-fontcoloresq');
        
        setThemeSel(selectedTheme);
        console.log("dfdf" + iconDir + "-" + backColorDir);
        props.onSelectedTheme(selectedTheme,iconEsq,backColorEsq,fontColorEsq,iconDir,backColorDir,fontColorDir);
    };

    return (
        <div>
            <label className="field">Temas:</label>
            <div className="temas field-selection"> 
               {temas.map(({id,image,iconEsq,backColorEsq,fontColorEsq,iconDir,backColorDir,fontColorDir})=>{
                   return(
                    <img key={id} src={image} alt="Tema 1" className={id===themeSel ? "single-theme selected":"single-theme"} onClick={selectThemeHandler}
                    data-theme={id} data-iconesq={iconEsq} data-backcoloresq={backColorEsq} data-fontcoloresq={fontColorEsq} data-icondir={iconDir} 
                    data-backcolordir={backColorDir} data-fontcolordir={fontColorDir} />
                   )
               })
               }
            </div>
        </div>
    );
}