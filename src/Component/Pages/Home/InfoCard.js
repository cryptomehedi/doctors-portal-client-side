import React from 'react';

const InfoCard = ({info}) => {
    const {img, title, description, bg} = info;

    return (
        <div>
            <div className={`card px-5 h-32 lg:card-side ${bg} shadow-xl`}>
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;