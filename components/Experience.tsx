import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen mb-10'>
            <p className="mb-10 z-50">
                <span className='bg-center mx-5 p-10 text-lg text-purple-600 font-bold italic z-50'>
                At the age of 27, I transitioned from Finance to Computer Science, proving that it's never too late to follow your true passion.
                </span>   
            </p>
            <div>
                <VerticalTimeline lineColor="#eae2ff">

                    {/* EDUCATION */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ 
                            background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                            boxShadow: 'none',  
                            borderBottom: 'none' 
                        }}
                        iconStyle={{ 
                            background: '#b9beff', 
                            color: '#fff',
                            boxShadow: 'none',  
                        }}

                        date="Till Dec 2024"  
                    >
                        <h3 className="vertical-timeline-element-title">CS undergraduate @
                        <a href="https://carleton.ca/" className='text-blue-500 italic underline'>Carleton U</a></h3>
                        <h4 className="vertical-timeline-element-subtitle">Ottawa, Canada</h4>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jun 2023 - Aug 2023"
                        contentStyle={{ 
                            background: 'rgba(255, 255, 255, 0.8)', color: '#000' ,
                            boxShadow: 'none',  
                            borderBottom: 'none' 
                        }}
                        iconStyle={{ 
                            background: '#6ec3f4', 
                            color: '#fff',
                            boxShadow: 'none',  
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">Co-op Student @
                            <a href="https://www.limgeomatics.com/" className='text-blue-500 italic underline'>Lim Geomatics</a>
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
                        <h4 className="vertical-timeline-element-subtitle">Java | Android Studio | Ubuntu | Python</h4>
                        <p>
                            Developed an Android App that fetches tree data from a server via socket connections, presenting details such as
                            location, diameter, and species in a user-friendly manner
                        </p>
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
                            background: '#6ec3f4', 
                            color: '#fff',
                            boxShadow: 'none',  
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">Project Finance Analyst @
                        <a href="https://www.jinkopower.com/en" className='text-blue-500 italic underline'>Jinko </a>
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>

                        <p className='text-gray-800 text-xs mx-2'>
                            Engaged with various teams from 20+ financial institutions, fostering partnerships to establish and sustain credit lines
                            between US$15M and US$100M
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
                            background: '#6ec3f4', 
                            color: '#fff',
                            boxShadow: 'none',  
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">Analyst @
                        <a href="https://www.linkedin.com/company/sealand-securities-co-ltd-/" className='text-blue-500 italic underline'>Sealand Securities</a>
                        </h3>
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
                            background: '#b9beff', 
                            color: '#fff',
                            boxShadow: 'none',  
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">BEcon @
                        <a href="https://en.ruc.edu.cn/" className='text-blue-500 italic underline'>Renmin University of China </a></h3>
                        <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
  }
  