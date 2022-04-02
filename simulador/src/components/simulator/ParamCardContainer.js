
function ParamCardContainer(props) {
    const styleClasses = "tab-content" + props.className;
    return (
        <div class="{classes}" id="nav-tabContent1">
            {props.children}   
        </div>
    );
}

export default ParamCardContainer;
