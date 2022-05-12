import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'


const Testimonials = () => {

    const testimonials = [
        {
            id : 1,
            img: people1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city : 'California'
        },
        {
            id:2,
            img: people2,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city : 'California'
        },
        {
            id:3,
            img: people3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            city : 'California'
        },
    ]

    return (
        <div className='mt-14'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-xl text-primary'>Testimonial</h2>
                    <h2 className='mt-2 text-3xl'>What Our Patients Says</h2>
                </div>
                <img className='w-24 md:w-48' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {
                    testimonials.map(testimonial => <div className='px-9 p-5 shadow-2xl rounded-lg' key={testimonial.id}>
                        <div>
                            <p>{testimonial.description}</p>
                        </div>
                        <div className='flex justify-start items-center mt-9'>
                            <img className='border-2 rounded-full border-primary' src={testimonial.img} alt="" />
                            <div className='ml-5'>
                                <h3 className='text-2xl text-accent font-semibold'>{testimonial.name}</h3>
                                <h3 className='font-medium'>{testimonial.city}</h3>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;