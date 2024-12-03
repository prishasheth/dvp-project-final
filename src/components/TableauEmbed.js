import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableauEmbed({ url, width = "100%", height = "600px" }) {
    const ref = useRef(null);
    const vizRef = useRef(null);

    const initViz = () => {
        if (vizRef.current) {
            vizRef.current.dispose();
        }
        vizRef.current = new tableau.Viz(ref.current, url, {
            width,
            height,
        });
    };

    useEffect(() => {
        initViz();
        return () => {
            if (vizRef.current) {
                vizRef.current.dispose();
            }
        };
    }, [url, width, height]);

    return <div ref={ref} style={{ width, height }} />;
}

export default TableauEmbed;
