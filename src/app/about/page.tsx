"use client";
import React, { useState } from "react";

const About = () => {
    const [name, setName] = useState("");

    const add = (char: any) => {
        let new_name = name + char;
        let last3 = new_name.slice(-3);
        if (["AAA", "BBB", "CCC"].includes(last3)) setName(name.slice(0, -2) + "_");
        else setName(name + char);
    };
    return (
        <div className="container py-5">
            <h1 className="display-3 mb-4"> About Page </h1>
            <div className="group d-flex gap-3 mb-4">
                <button onClick={() => add("A")}>A</button>
                <button onClick={() => add("B")}>B</button>
                <button onClick={() => add("C")}>C</button>
            </div>
            <h5>{name}</h5>
        </div>
    );
};

export default About;
