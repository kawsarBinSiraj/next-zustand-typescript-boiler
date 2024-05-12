"use client";
import React, { useState } from "react";
import ZustandExample from "../zustand-example";

const SmartCarousel = () => {
    const [rotate, setRotate] = useState(0);
    const [c, setC] = useState(0);

    return (
        <>
            <div id="smart-carousel">
                <div id="s-carousel-circle">
                    <div className="s-circle" style={{ rotate: `${rotate}deg` }}>
                        <div className={`circle-w ${c % 4 === 0 && "active"}`}>
                            <img src="https://blog.clover.com/wp-content/uploads/2021/06/plates-of-pasta-and-salad.jpg" alt="img" className="img-fluid" />
                            <div className="circle-c">
                                <ZustandExample />
                            </div>
                        </div>
                        <div className={`circle-w ${c % 4 === 1 && "active"}`}>
                            <img src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" alt="img" className="img-fluid" />
                            <div className="circle-c">
                                <ZustandExample />
                            </div>
                        </div>
                        <div className={`circle-w ${c % 4 === 2 && "active"}`}>
                            <img
                                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg"
                                alt="img"
                                className="img-fluid"
                            />
                            <div className="circle-c">
                                <ZustandExample />
                            </div>
                        </div>
                        <div className={`circle-w ${c % 4 === 3 && "active"}`}>
                            <img
                                src="https://images.ctfassets.net/sahy2rpqbnsp/2JGK0TGHUNEjPZFo1HkStm/64ee6304baf625ac5ff7a89da919e6a7/SPF_-_05.jpg?w=1920&h=1080&fm=jpg&q=50&fit=fill"
                                alt="img"
                                className="img-fluid"
                            />
                            <div className="circle-c">
                                <ZustandExample />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="s-carousel-content" className="pt-5 mt-5">
                    <div className="row mb-5">
                        <div className="col-lg-8">
                            <div id="content-widgets" className="d-flex align-items-center gap-4">
                                <button
                                    className="btn fs-1 border-0"
                                    style={{ rotate: "180deg" }}
                                    onClick={() => {
                                        setRotate(rotate - 90);
                                        setC(c - 1);
                                    }}
                                >
                                    &#10139;
                                </button>
                                <div className="carousel-c d-flex align-items-center justify-content-between gap-4">
                                    <div className={`content-w ${c % 4 === 0 && "active"}`}>
                                        <img src="https://blog.clover.com/wp-content/uploads/2021/06/plates-of-pasta-and-salad.jpg" alt="img" className="img-fluid" />
                                        <p className="mb-0">Suspendisse non nisl sit</p>
                                    </div>
                                    <div className={`content-w ${c % 4 === 1 && "active"}`}>
                                        <img src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg" alt="img" className="img-fluid" />
                                        <p className="mb-0">Lorem, ipsum dolor sit.</p>
                                    </div>
                                    <div className={`content-w ${c % 4 === 2 && "active"}`}>
                                        <img
                                            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/23/0/FN_healthy-fast-food-red-robin-avocado-cobb-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516723515457.jpeg"
                                            alt="img"
                                            className="img-fluid"
                                        />
                                        <p className="mb-0">Suspendisse feugiat.</p>
                                    </div>
                                    <div className={`content-w ${c % 4 === 3 && "active"}`}>
                                        <img
                                            src="https://images.ctfassets.net/sahy2rpqbnsp/2JGK0TGHUNEjPZFo1HkStm/64ee6304baf625ac5ff7a89da919e6a7/SPF_-_05.jpg?w=1920&h=1080&fm=jpg&q=50&fit=fill"
                                            alt="img"
                                            className="img-fluid"
                                        />
                                        <p className="mb-0">Etiam ultricies nisilorem</p>
                                    </div>
                                </div>
                                <button
                                    className="btn fs-1 border-0"
                                    onClick={() => {
                                        setRotate(rotate + 90);
                                        setC(c + 1);
                                    }}
                                >
                                    &#10139;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartCarousel;
