import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const ExperienceCard = ({ title, subtitle, date, content }) => {
    return (
      <div>
        {/* EDUCATION */}
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            date={date}
            iconStyle={{ 
                background: '#f1f5f9', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <p>{content}</p>
        </VerticalTimelineElement>
      </div>
    );
  }
  export default ExperienceCard;