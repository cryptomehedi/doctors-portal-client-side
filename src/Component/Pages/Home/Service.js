import React from 'react';

const Service = ({info}) => {
    const {img, title, description } = info;
    
    return (
        <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img className="h-28" src={img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;