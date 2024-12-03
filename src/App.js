import React from "react";
import TableauEmbed from "./components/TableauEmbed";
import "./App.css";
import cartogramImage from "./cartogram.png";

function App() {
    const sections = [
        {
            type: "paragraph",
            content: "What makes someone an innovator? Is it their upbringing, the schools they attend, or the opportunities they encounter along the way? Across the United States, inventors create ideas that not only change industries but also shape the future. Innovation is deeply influenced by the resources and opportunities available to individuals. Key factors such as gender, family income, geography, and access to education can determine who has the chance to turn their ideas into reality. Understanding these influences is important to make informed decisions about a child’s upbringing and to provide children with the support and encouragement needed to spark creativity and drive innovation.",
        },
        {
            type: "dashboard", 
            url: "https://public.tableau.com/views/InventorsbyState/InventorsByStateandCZ?:language=en-US&publish=yes&:origin=viz_share_link",
            title: "InventorsByStateandCZ", 
            description: "To better understand innovation rates across various factors, let’s first begin by observing the total number of inventors by state in the US. Click on any state to delve deeper into how inventors are spread across different commuting zone*.  As we can see, California has the highest number of inventors in the US, with 3956 inventors, followed by New York which has a significantly lower count of 2166.",
            width: "100%", 
            height: "520px", 
        },
        {
            type: "paragraph",
            content: "Let’s explore inventor counts by comparing the number of inventors across regions and genders.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/RHJXFPG82?:display_count=n&:origin=viz_share_link",
          title: "Count by Gender",
          description: "In all regions, the number of female inventors is noticeably lower than that of male inventors. This trend is consistent at the state level, where female inventor counts remain significantly lower than their male counterparts across every state. Click on any region or measure to explore the data and uncover specific insights.",
          width: "100%",
          height: "800px",
        },
        {
            type: "paragraph",
            content: "We can gain further insights into inventor counts by considering invention categories alongside region and gender.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/GenderData_17331650303770/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Category by Gender",
          description: "Comparing the number of inventors across categories reveals that the Computers and Communications category has the highest total, with the Northeast region contributing 2,712 inventors to this category. Among the seven categories, the Drugs and Medical category stands out for having the highest proportion of female inventors. Use the highlight table to filter data for the pie charts by clicking on any cell, row, or column. This allows you to compare the number of inventors by gender based on your selection on the table.",
          width: "100%", 
          height: "800px",
        },
        {
            type: "paragraph",
            content: "Now, let’s learn about how patent applicant counts compare to patent grantee counts across the United States.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/8F7W3HSJ2?:display_count=n&:origin=viz_share_link",
          title: "Applicant to Grantee Ratio",
          description: "States with a higher applicant-to-grantee ratio indicate a larger gap between patent applicants and grantees, suggesting that in those states, a smaller proportion of applicants are granted patents. Washington D.C. has the highest applicant-to-grantee ratio of 1.47, indicating that for every grantee, there are 1.47 applicants, suggesting a relatively larger gap between applicants and those granted patents in the region.",
          width: "100%", 
          height: "800px",
        },
        {
            type: "paragraph",
            content: "Let’s now compare the patent applicant and grantee counts across age groups.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/M5H93WGST?:display_count=n&:origin=viz_share_link",
          title: "Comparison of Applicant Count and Grantee Count By Age",
          description: "We observe a bell curve pattern in both applicant and grantee counts as age increases. The gap between applicant and grantee counts widens until it peaks around age 41, after which the gap begins to decrease.",
          width: "100%", 
        },
        {
            type: "paragraph",
            content: "Now, let's dive deeper by exploring the same data across different years. Use the year slider to compare patent applicant and grantee counts by age for any specific year and observe how the trends change over time.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/M5H93WGST?:display_count=n&:origin=viz_share_link",
          title: "Comparison of Applicant Count and Grantee Count By Age",
          description: "Over the years, we observe that the gap between applicant and grantee counts is widening, indicating that a smaller proportion of applicants are being granted patents.",
          width: "100%", 
        },
        {
            type: "paragraph",
            content: "Earlier, we observed a gap between the number of male and female inventors. Now, let's see if there is a similar disparity in the applicant and grantee counts for each gender.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/shared/5Y6YHX9S7?:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "For each gender, we can observe the counts of patent applicants and grantees. As with earlier observations, female patent applicants and grantees are significantly lower than their male counterparts. Also, we can observe that the gap between applicants and grantees follows a similar pattern to earlier as well. As age increases, the gap between applicants and grantees widens until it peaks, then the gap begins to decrease.",
          width: "100%", 
          height: "800px",
        },
        {
            type: "image",
            src: cartogramImage,
            title: "Cartogram",
            description: "This image represents gender distribution across different industries, based on recent data.",
            width: "100%", 
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/CS6730/ParetoChart?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
        },
        {
          type: "dashboard",
          url: "https://public.tableau.com/views/CS6730/PatentShareonParentalIncome?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
          title: "Dashboard 2",
          description: "This dashboard examines gender data across various regions, illustrating differences in participation rates.",
          width: "100%", 
        },
        {
            type: "paragraph",
            content: "The following visualization presents an in-depth Pareto analysis of key processes.",
        },
        {
            type: "dashboard",
            url: "https://public.tableau.com/views/Book3_17331659142060/MeanAvgIncome?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            title: "Dashboard 2",
            description: "",
            width: "100%", 
          },
        {
            type: "paragraph",
            content: "The following visualization presents an in-depth Pareto analysis of key processes.",
        },
        {
            type: "dashboard",
            url: "https://public.tableau.com/views/Book1_17317883274520/citationsvsPatents?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
            title: "Dashboard 2",
            description: "",
            width: "100%", 
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
