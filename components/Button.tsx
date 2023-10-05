import React from 'react';

const Button = ({ data, link }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
        href={link}
        className="rounded-md animate-text  bg-gradient-to-r from-purple-400 to-blue-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
        {data}
        </a>
    </div>
  );
};

export default Button;