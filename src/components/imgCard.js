import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ImgCard = ({ image }) => {
    const tags = image.tags.split(',');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = image.largeImageURL;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition transform hover:scale-105 mx-auto sm:mx-2 my-4">
            <img src={image.webformatURL} alt="" className="w-full" style={{ width: '100%', height: 'auto' }} />
            <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-blue-400 text-lg sm:text-xl">
                        Photo by {image.user}
                    </div>
                    <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    </button>
                </div>
                <ul className="text-sm sm:text-base">
                    <li>
                        <strong>Views:</strong> {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong> {image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong> {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-4 py-4 flex flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-blue-100 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold text-gray-800 mr-2 mb-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ImgCard;
