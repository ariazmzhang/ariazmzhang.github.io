import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
      <div>
        <p className='text-center mx-5 p-10 text-lg text-purple-700 font-bold italic'>At the age of 27, I transitioned from Finance to Computer Science, proving that it's never too late to follow your true passion.</p>
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
                background: '#86efac', 
                color: '#fff',
                boxShadow: 'none',  
            }}

            date="Till Dec 2024"  
        >
            <h3 className="vertical-timeline-element-title">CS undergraduate @Carleton U</h3>
            <h4 className="vertical-timeline-element-subtitle">Ottawa, Canada</h4>
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
                background: '#93c5fd', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">Co-op Student @Lim Geomatics</h3>
            <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
            <h4 className="vertical-timeline-element-subtitle">Java | Android Studio | Ubuntu | Python</h4>
            <p>
                Developed an Android App that fetches tree data from a server via socket connections, presenting details such as
                location, diameter, and species in a user-friendly manner
            </p>
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
                background: '#93c5fd', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">Project Finance Analyst @Jinko Power Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>

            <p className='text-gray-800 text-xs mx-2'>
                <ul>
                    <li>
                        Engaged with various teams from 20+ financial institutions, fostering partnerships to establish and sustain credit lines
                        between US$15M and US$100M
                    </li>
                </ul>
            </p>
         
            
        </VerticalTimelineElement>


        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                boxShadow: 'none',  
                borderBottom: 'none' 
            }}
            date="Mar 2017 - Aug 2018"
            iconStyle={{ 
                background: '#93c5fd', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">Analyst @Sealand Securities</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
            <p>Designed various financial products tailored to clients' needs and macroeconomics environment</p>
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
                background: '#86efac', 
                color: '#fff',
                boxShadow: 'none',  
            }}
        >
            <h3 className="vertical-timeline-element-title">BEcon @Renmin University of China </h3>
            <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
        </VerticalTimelineElement>

        </VerticalTimeline>
        

      </div>
    );
  }
  