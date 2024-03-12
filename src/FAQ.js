import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="fourthpart">
            <p className="p1">Frequently asked questions</p>
            <div className="layout">
                {faqData.map((faq, index) => (
                    <div className={`accordion ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => toggleAccordion(index)}>
                        <div className="accordion__question">
                            <p>{faq.question}</p>
                        </div>
                        <div className="accordion__answer">
                            <p>{faq.answer}</p>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqData = [
    {
        question: 'What is GrowthX?',
        answer: 'GrowthX is a social learning community with 2000+ top 1% talent pool. Focused on continuous learning, networking and upskilling.'
    },
    {
        question: 'What roles can GrowthX talent help with?',
        answer: 'GrowthX members are the best match for your business, product, marketing, strategy and Founder’s office roles.'
    },
    {
        question: 'What is the turn around time for profile sharing?',
        answer: 'As soon as the agreement is signed, you can access the top 1% talent in just 6 mins.'
    },
    {
        question: 'What is the placement fee?',
        answer: 'A non-negotiable flat fee of 9.5% is charged on first years compensation of each successful hire.'
    },
    {
        question: 'What is the replacement policy?',
        answer: 'We have a free 90 day replacement policy.'
    },
    {
        question: 'What is the hiring process?',
        answer: 'The process starts with signing the Talent Agreement. Post this our Talent partner will work with you to analyze your roles and curate handpicked profiles for you.'
    }
];

export default FAQ;
