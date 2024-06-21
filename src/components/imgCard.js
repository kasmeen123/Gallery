
import React from 'react';

const ImgCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <>
        
        <div className="max-w-sm rounded cursor-pointer overflow-hidden shadow-lg transition transform hover:scale-105">
          
            <img src={image.webformatURL} alt="" className="w-full" style={{ width: '270px', height: '300px' }} />
            <div className="px-6 py-4">
                <div className="font-bold text-blue-400 text-xl mb-2"> {/* Change text-teal-400 to text-blue-400 */}
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"> {/* Change bg-teal-100 to bg-blue-100 */}
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
        </>
    );
};

export default ImgCard;
