import './SPcard.css';
const SPcard = ({image, altName, para}) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col img-col">
                    <img id="sp-card-img-id" src={image} alt={altName} />
                    </div>
                    <div className="col mt-3">
                    <p id="sp-card-id">{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SPcard;