import React from 'react';

const ExperiencePage = () => {
    return (
        <React.Fragment>
            <h1>Welcome to my Experiences</h1>

            <h2>Top Skills</h2>
            <div className="row">
                <div className="col-md-6">
                    <p>React</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>ReactNative</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "70%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>Java</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "60%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>Bootstrap</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>DrawIO</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>NodeJS</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>Kotlin</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>HTML</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                    <p>Figma</p>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "90%", backgroundColor: "#C8A2C8" }} // Lilac purple
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExperiencePage;