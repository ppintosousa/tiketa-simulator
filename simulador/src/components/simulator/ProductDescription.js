import "./ProductDescription.css";

function ProductDescription(props) {
    return (
        <div> 
            <div className="productTitle">{props.title}</div>
            <div className="productDescription">
                {props.description.split('\n').map((i,index) => {
                    return <p key={index}>{i}</p>
                })
                }
            </div>
        </div>
    );
}

export default ProductDescription;