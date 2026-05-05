
function Card({ title, image }) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src={image} alt={title} className="card-image" />

                </div>
                <div className="card-title">
                    <h4>{title}</h4>
                </div>
            </div>
        </>

    );
}

export default Card;