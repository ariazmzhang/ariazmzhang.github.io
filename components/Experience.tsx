import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
      <div>
        <VerticalTimeline lineColor="#a78bfa">
  
        {/* EDUCATION */}
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}

            date="Expected Graduation Date: Dec 2024"  
        >
            <h3 className="vertical-timeline-element-title">BSc in Computer Science, Co-operative Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Carleton University, Ottawa, Canada</h4>
        </VerticalTimelineElement>

        

        {/* EXPERIENCE */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - Aug 2023"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">GIS/AI Technician (Co-op)</h3>
            <h4 className="vertical-timeline-element-subtitle">Lim Geomatics, Ottawa, Canada</h4>
            <p>Developed an Android application...</p>
            <p>Established a daemon service...</p>
            {/* Add more bullet points as needed */}
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Jun 2021"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">Analyst, M&A/structured Finance</h3>
            <h4 className="vertical-timeline-element-subtitle">Jinko Power Technology, Shanghai, China</h4>
            <p>Engaged with various teams...</p>
            <p>Led collaboration among 5+ parties...</p>
            {/* Add more bullet points as needed */}
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            date="Expected Graduation Date: Dec 2024"
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">BSc in Computer Science, Co-operative Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Carleton University, Ottawa, Canada</h4>
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2013 - Jul 2017"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">BEcon in Public Finance</h3>
            <h4 className="vertical-timeline-element-subtitle">Renmin University of China, Beijing, China</h4>
        </VerticalTimelineElement>

        </VerticalTimeline>
        

      </div>
    );
  }
  