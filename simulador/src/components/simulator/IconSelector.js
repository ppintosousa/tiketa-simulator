import './IconSelector.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import React,{useState} from 'react';

const icons= [
    {icon_code: "drc135",
     icon_name: "drc135",
     icon_group_code: "1",
     icon_group_name: "Personagens"
    },
    {icon_code: "drc121",
     icon_name: "drc121",
     icon_group_code: "1",
     icon_group_name: "Personagens"
    },
    {icon_code: "drc122",
     icon_name: "drc122",
     icon_group_code: "1",
     icon_group_name: "Personagens"
    },
    {icon_code: "drc1",
     icon_name: "drc1",
     icon_group_code: "2",
     icon_group_name: "Animais"
    },
    {icon_code: "drc10",
     icon_name: "drc10",
     icon_group_code: "2",
     icon_group_name: "Animais"
    },
    {icon_code: "drc11",
     icon_name: "drc11",
     icon_group_code: "2",
     icon_group_name: "Animais"
    },
    {icon_code: "drc109",
     icon_name: "drc109",
     icon_group_code: "3",
     icon_group_name: "Desportos"
    },
    {icon_code: "drc117",
     icon_name: "drc117",
     icon_group_code: "3",
     icon_group_name: "Desportos"
    },
    {icon_code: "drc123",
     icon_name: "drc123",
     icon_group_code: "3",
     icon_group_name: "Desportos"
    }
]
const iconsGroups = [
    {
        icon_group_code: "1",
        icon_group_name:"Personagens"
    },
    {
        icon_group_code: "2",
        icon_group_name:"Animais"
    },
    {
        icon_group_code: "3",
        icon_group_name:"Desportos"
    },
    {
        icon_group_code: "4",
        icon_group_name:"Férias e Praia"
    },
    {
        icon_group_code: "5",
        icon_group_name:"Profissões"
    },
    {
        icon_group_code: "6",
        icon_group_name:"Alimentos"
    },
    {
        icon_group_code: "7",
        icon_group_name:"Transportes"
    },
    {
        icon_group_code: "8",
        icon_group_name:"Tecnologia"
    },
    {
        icon_group_code: "9",
        icon_group_name:"Emojis"
    },
    {
        icon_group_code: "10",
        icon_group_name:"Diversos"
    },
    {
        icon_group_code: "11",
        icon_group_name:"Bebé"
    },
    {
        icon_group_code: "12",
        icon_group_name:"Artesanato"
    },
    {
        icon_group_code: "13",
        icon_group_name:"Alergia"
    },
    {
        icon_group_code: "14",
        icon_group_name:"Eventos"
    },
    {
        icon_group_code: "15",
        icon_group_name:"Bandeiras"
    },
    {
        icon_group_code: "16",
        icon_group_name:"Natal"
    }
]

function IconSelector(props) {
    
    const [iconSelected,setSelectedIcon]=useState(props.selectedIcon);
    
    const selectIconHandler = (event) => {
        let iconSelected1 = event.target.getAttribute('data-icon')
        setSelectedIcon(iconSelected1);
        props.onSelectedIcon(iconSelected1);
        
    };

    const getIconsByCategory = (category) => { return icons.filter(icon => icon.icon_group_name===category)}
  
    return (
    <Tabs>
         {iconsGroups.map(({icon_group_code,icon_group_name})=>{
                   return(
                    <Tab  eventKey={icon_group_code}  title={icon_group_name} key={icon_group_code}>
                        <div  className="field-selection">
                            <div className={props.selectedIcon === "drc00" ? "single-icon selected" : "single-icon"} key={"drc00" + icon_group_code} data-icon="drc00" onClick={selectIconHandler}>
                                <span data-icon="drc00" >Sem Desenho</span>
                            </div>
                            {getIconsByCategory(icon_group_name).map(({icon_code,icon_name})=>{
                                return(
                                    <div key={icon_code} className={icon_code === props.selectedIcon ? "single-icon selected" : "single-icon"} data-icon={icon_code} onClick={selectIconHandler}>
                                         <img className="image-responsive" data-icon={icon_code} src={"icons/" + icon_code + ".png"}/>
                                    </div>
                                 )
                                 })
                                }
                        </div>
                     </Tab>       
                   )
               })
        }
    </Tabs>
  );
}

export default IconSelector;
