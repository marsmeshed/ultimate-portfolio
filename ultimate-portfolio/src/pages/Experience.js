import React from "react";
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
  <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2018 - 2022"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
      icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Yucca Valley High-School, Yucca Valley, California
          </h3>
          <p>High-School Diploma, 3.9 GPA</p>
      </VerticalTimelineElement>

      
      <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2022-2023"
      iconStyle={{ background: "#3e497a", color: "#fff" }}
      icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UCLA Full-Stack program
          </h3>
          <p>Certificate of completion</p>
      </VerticalTimelineElement>


    </VerticalTimeline>
    </div>
  );
}

export default Experience;