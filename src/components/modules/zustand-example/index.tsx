"use client";
import React, { useEffect } from "react";
import useBearStore from "@/zustand-store/useBearStore";
import { toastNotify } from "@/helper/app-helper";

const ZustandExample = () => {
    const { bears, increase, removeAll }: any = useBearStore();

    /*  hydration handling for persist */
    useEffect(() => {
        useBearStore.persist.rehydrate();
    }, []);

    return (
        <>
            <p className="mb-0 fs-1 fw-bold"># NextJS</p>
            <h6 className="mb-2 fs-3"># Typescript, Zustand, Bootstrap</h6>
            <h4 className="mb-2 display-5 text-uppercase fw-bold d-flex align-items-center gap-2">
                <span onClick={increase} className="btn btn-primary bg-gradient text-light">
                    Increase Quantity
                </span>
                <span
                    onClick={() => {
                        removeAll();
                        toastNotify("success", "Successfully Reset");
                    }}
                    className="btn btn-danger bg-gradient text-light"
                >
                    Reset
                </span>
                ({bears})
            </h4>
        </>
    );
};

export default ZustandExample;
