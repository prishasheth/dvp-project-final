import React from "react";
import TableauEmbed from "./components/TableauEmbed";
import "./App.css";

function App() {
    const sections = [
        {
            type: "paragraph",
            content: "What makes someone an innovator? Is it their upbringing, the schools they attend, or the opportunities they encounter along the way? Across the United States, inventors create ideas that not only change industries but also shape the future. Innovation is deeply influenced by the resources and opportunities available to individuals. Key factors such as gender, family income, geography, and access to education can determine who has the chance to turn their ideas into reality. Understanding these influences is important to make informed decisions about a child’s upbringing and to provide children with the support and encouragement needed to spark creativity and drive innovation.",
        },
        {
            type: "dashboard",
            url: "https://public.tableau.com/views/InventorsbyState/InventorsByStateandCZ?:language=en-US&publish=yes&:origin=viz_share_link",
            title: "Dashboard 1",
            description: "To better understand innovation rates across various factors, let’s first begin by observing the total number of inventors by state in the US. Click on any state to delve deeper into how inventors are spread across different commuting zone*.  As we can see, California has the highest number of inventors in the US, with 3956 inventors, followed by New York which has a significantly lower count of 2166.",
            width: "100%", 
            height: "520px", 
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/RHJXFPG82?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/GenderData_17331650303770/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/8F7W3HSJ2?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
            type: "paragraph",
            content: "As we delve deeper, let's focus on gender-related data trends in various industries.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/M5H93WGST?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/DK8PD4FC8?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/5Y6YHX9S7?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
            type: "image",
            src: ".pngcartogram",
            title: "Image 1",
            description: "This image represents gender distribution across different industries, based on recent data.",
            width: "80%", // Custom width for this image
            height: "400px", // Custom height for this image
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/CS6730/ParetoChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/CS6730/PatentShareonParentalIncome?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", // Custom width for this dashboard
          height: "800px",
        },
        {
            type: "paragraph",
            content: "The following visualization presents an in-depth Pareto analysis of key processes.",
        },
        {
            type: "paragraph",
            content: "In conclusion, the sections above provide a mix of interactive dashboards and visual representations.",
        },
    ];

    return (
        <div className="app-container">
            <h1>Insights and Analysis</h1>
            {sections.map((section, index) => {
                if (section.type === "paragraph") {
                    return (
                        <div key={index} className="paragraph-section">
                            <p>{section.content}</p>
                        </div>
                    );
                }
                if (section.type === "dashboard") {
                    return (
                        <div key={index} className="section">
                            <div className="dashboard-section flipped">
                                <div className="dashboard-text">
                                    {/* <h2>{section.title}</h2> */}
                                    <p>{section.description}</p>
                                </div>
                                <div className="dashboard-container">
                                    <TableauEmbed
                                        url={section.url}
                                        width={section.width}
                                        height={section.height}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
                if (section.type === "image") {
                    return (
                        <div key={index} className="section">
                            <div className="dashboard-section flipped">
                                <div className="dashboard-text">
                                    {/* <h2>{section.title}</h2> */}
                                    <p>{section.description}</p>
                                </div>
                                <div className="dashboard-container">
                                    <img
                                        src={section.src}
                                        // alt={section.title}
                                        style={{
                                            width: section.width,
                                            height: section.height,
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default App;
