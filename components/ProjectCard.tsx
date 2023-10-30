import React from 'react';

type ProjectCardProps = {
    title: string;
    techStack: string;
    descriptions: string[];
    imgSrc: string;
    link: string;
  };
  
const ProjectCard: React.FC<ProjectCardProps> = ({ title, techStack, descriptions, imgSrc, link }) => {
    return (
        <div className="p-5 mb-6 bg-white text-black shadow-lg rounded-md bg-opacity-50">
            <div className='relative w-full h-80 mb-3'>
                <img src={imgSrc} alt={title} className="w-full h-full object-contain mb-4 rounded-t-md" />
            </div>
            
            <h2 className="text-xl font-bold text-blue-500 underline mb-2">
                <a href={link}>{title}</a> 
            </h2>
            <p className="text-sm text-gray-500 mb-3">{techStack}</p>
            <ul className="list-disc pl-5">
                {descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectCard;
