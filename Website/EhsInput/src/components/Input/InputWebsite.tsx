import React, { useEffect, useRef, useState } from "react";
import InfoHeader from "./InfoHeader";
import ListOfInput from "./ListOfInput";
import SubmitButton from "./SubmitButton";
import { Structure } from "../../models/Structure";
import "../../styles/app.css";
import Sidebar from "../Sidebar";

export default function InputWebsite() {
  const structure = new Structure();
  
  // State to track the currently visible section
  const [activeSection, setActiveSection] = useState<string>("Health");

  const ListInput = [
    {
      header: "Health",
      names: structure.healthFields,
      units: structure.healthUnits,
    },
    {
      header: "Safety",
      names: structure.safetyFields,
      units: structure.safetyUnits,
    },
    {
      header: "Energy",
      names: structure.energyFields,
      units: structure.energyUnits,
    },
    {
      header: "Material",
      names: structure.materialFields,
      units: structure.materialUnits,
    },
    {
      header: "Waste",
      names: structure.wasteFields,
      units: structure.wasteUnits,
    },
  ];

  // Refs for each section
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("scrollDiv");
      if (!scrollContainer) return;

      const containerRect = scrollContainer.getBoundingClientRect();
      const topThreshold = containerRect.top + (containerRect.height * 0.4); 

      let currentSection = activeSection;

      sectionRefs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= topThreshold && rect.bottom > topThreshold) {
          currentSection = ListInput[index].header;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    const scrollContainer = document.getElementById("scrollDiv");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection, ListInput]);

  return (
    <div id="mainpage">
      <Sidebar
        inputOpen={true}
        chartOpen={false}
        manageOpen={false}
        activeSection={activeSection}
      />
      <div className="ms-3 centerText mt-4">
        <InfoHeader year={2024} structure={structure} />
        
        <div id="scrollDiv" className="mx-3 scroll">
          {ListInput.map((input, count) => (
            <div
              key={input.header}
              id={input.header}
              ref={(el) => (sectionRefs.current[count] = el as HTMLDivElement)}
            >
              <ListOfInput
                names={input.names}
                units={input.units}
                header={input.header}
                structure={structure}
              />
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center me-4">
          <div className="mx-auto">
            <SubmitButton structure={structure} />
          </div>
        </div>
      </div>
    </div>
  );
}
