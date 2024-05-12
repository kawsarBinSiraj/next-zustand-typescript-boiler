"use client";
import SmartCarousel from "@/components/modules/smart-carousel";
import ThemeChanger from "@/components/next-themes/theme-changer";
import React from "react";

const page = () => {
    return (
        <div className="home py-5">
            <div className="container">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <SmartCarousel />
                        <ThemeChanger/>
                        <p className="mb-0 mt-2 fs-5">
                            @Design & Developed By &nbsp;
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Kawsar Bin Siraj
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
