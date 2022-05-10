import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const Info = () => {
    const cardInfos = [
            {
                img: clock,
                title: 'Opening Hours',
                description: 'Lorem Ipsum is simply dummy text of the pri',
                bg: 'bg-gradient-to-r from-secondary to-primary'
            },
            {
                img: marker,
                title: 'Visit Location',
                description: 'Brooklyn, NY 10036, United States',
                bg: 'bg-accent'
            },
            {
                img: phone,
                title: 'Contact us now',
                description: '+000 123 456789',
                bg: 'bg-gradient-to-r from-secondary to-primary'
            },
    ]
    return (
        <div className="grid grid-cols-3 gap-6">
            {/* <div class="card px-5 lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure><img src={clock} alt="Album"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="card px-5 lg:card-side bg-accent shadow-xl">
                <figure><img src={marker} alt="Album"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">Visit Location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card px-5 lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure><img src={phone} alt="Album"/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div> */}
            {
                cardInfos.map(cardInfo => <InfoCard info={cardInfo} key={cardInfo.title} />)
            }
        </div>
    );
};

export default Info;