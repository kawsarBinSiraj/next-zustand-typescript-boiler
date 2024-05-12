"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

const NextThemesProviders = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemesProviders;
