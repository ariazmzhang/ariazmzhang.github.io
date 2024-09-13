import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
      <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-4 justify-center mt-20">
            <div className='mb-12 text-center'>
                <p className="text-lg text-purple-600 font-bold italic">
                    At 27, I transitioned from Finance to Computer Science, demonstrating that it's never too late to pursue one's passion.
                </p>
            </div>
            <VerticalTimeline lineColor="#eae2ff">
                {/* Education and Work Experience */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.8)', color: '#000', boxShadow: 'none', borderBottom: 'none' }}
                    iconStyle={{ background: '#b9beff', color: '#fff', boxShadow: 'none' }}
                    date="Till Dec 2024"
                >
                    <h3 className="vertical-timeline-element-title">CS Undergraduate at <a href="https://carleton.ca/" className='text-blue-500 italic underline'>Carleton University</a></h3>
                    <h4 className="vertical-timeline-element-subtitle">Ottawa, Canada</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2023 - Aug 2023"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.8)', color: '#000', boxShadow: 'none', borderBottom: 'none' }}
                    iconStyle={{ background: '#6ec3f4', color: '#fff', boxShadow: 'none' }}
                >
                    <h3 className="vertical-timeline-element-title">Co-op Student at <a href="https://www.limgeomatics.com/" className='text-blue-500 italic underline'>Lim Geomatics</a></h3>
                    <h5 className="vertical-timeline-element-subtitle">Ottawa, Canada</h5>
                    <h4 className="vertical-timeline-element-subtitle">Technologies: Java, Android Studio, Ubuntu, Python</h4>
                    <p>Developed an Android app for retrieving tree data via socket connections, presenting details such as location, diameter, and species.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2019 - Jun 2021"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.8)', color: '#000', boxShadow: 'none', borderBottom: 'none' }}
                    iconStyle={{ background: '#6ec3f4', color: '#fff', boxShadow: 'none' }}
                >
                    <h3 className="vertical-timeline-element-title">Project Finance Analyst at <a href="https://www.jinkopower.com/en" className='text-blue-500 italic underline'>Jinko</a></h3>
                    <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                    <p>Facilitated partnerships with over 20 financial institutions to establish and maintain credit lines ranging from US$15M to US$100M.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mar 2017 - Aug 2018"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.8)', color: '#000', boxShadow: 'none', borderBottom: 'none' }}
                    iconStyle={{ background: '#6ec3f4', color: '#fff', boxShadow: 'none' }}
                >
                    <h3 className="vertical-timeline-element-title">Analyst at <a href="https://www.linkedin.com/company/sealand-securities-co-ltd-/" className='text-blue-500 italic underline'>Sealand Securities</a></h3>
                    <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                    <p>Designed financial products tailored to clients' needs and macroeconomic conditions.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sep 2013 - Jul 2017"
                    contentStyle={{ background: 'rgba(255, 255, 255, 0.8)', color: '#000', boxShadow: 'none', borderBottom: 'none' }}
                    iconStyle={{ background: '#b9beff', color: '#fff', boxShadow: 'none' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Economics at <a href="https://en.ruc.edu.cn/" className='text-blue-500 italic underline'>Renmin University of China</a></h3>
                    <h4 className="vertical-timeline-element-subtitle">Beijing, China</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}
