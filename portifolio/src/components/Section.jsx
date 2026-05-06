
function Section ({image, title,description,tags, repoLink,liveLink}) {


    return (
        <section className="container-section-card">
            <div className="image-section">
                <img src={image} alt={title} className="section-image" />
            </div>
            <div className="title-description">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="tags-section">
                {tags.map((tag, index) => (
                    <h4 key={index} className="section-h4">{tag}</h4>
                ))}
            </div>
            <div className="section-links">
                <a href={liveLink} target="_blank"> <i className="fab fa-github"></i> Ver código</a>
                <a href={repoLink} target="_blank"><i className="pi pi-external-link "></i> Ver projeto </a>
            </div>
        </section>
    );
}

export default Section