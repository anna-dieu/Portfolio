import React from 'react';

const ProjectPage = () => {
    return (

        <React.Fragment>
            <h1>Welcome to my Experiences</h1>

            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                            alt="Card image cap"
                        />
                        <div className="1">
                            <h2> Carbon Cap </h2>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                            alt="Card image cap"
                        />
                        <div className="2">
                            <h2> Task-AID </h2>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
                            alt="Card image cap"
                        />
                        <div className="3">
                            <h2> Logi-note </h2>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProjectPage;