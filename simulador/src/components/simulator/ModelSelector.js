
import "./ModelSelector.css";

const ModelSelector = (props) => {
    const bothHandler = () => {
        props.onSelectedModel("both");
    }
    const leftHandler = () => {
        props.onSelectedModel("left");
    }
    const rightHandler = () => {
        props.onSelectedModel("right");
    }
    return (
        <div>
            <label className="field">Modelo:</label>
            <div className="field-selection">
                <button className={props.selectedModel ==="both" ? "btSelector selected" : "btSelector" } onClick={bothHandler}>Ambos</button>
                <button className={props.selectedModel ==="left" ? "btSelector selected" : "btSelector" } onClick={leftHandler}>Esquerda</button>
                <button className={props.selectedModel ==="right" ? "btSelector selected" : "btSelector" } onClick={rightHandler}>Direita</button>
            </div>
        </div> 
    );
}

export default ModelSelector;