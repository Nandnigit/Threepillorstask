import React from 'react';
import './Partnership2.css'; // Import your CSS file

function Session(props) {
  return (
    <div className="session">
      <h3 className="session-text">{props.date}</h3>
      <h4 className="session-title">{props.title}</h4>
      <p className="session-desc">{props.description}</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="thirdpart">
      <div className="thirdpart1">
        <h3>Rajnish Kumar</h3>
        <p>“I got actionable feedback on how to build partnerships for my company”</p>
        <p>Ashu's craft shows how businesses can grow by teaming up with partners. Even small companies can work with big ones to succeed. If you're starting a business in a new place and need help, this course is really useful.  I appreciate how Ashu really listens to us. It's clear he cares about solving out problems. I think it's a great course and suggest others to take it too!”</p>
      </div>
      <div className="thirdpart1">
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/64f1d43d8cb6363179f11f76_rajnish-p-500.png" width="250px" height="250px" alt="image4" />
      </div>
    </div>
  );
}

function PartnershipPage() {
  return (
    <div className="partnership2">
      <div className="session-container">
        <h1 className="Heading">Learning experience</h1>
        <Session
          date="SESSION 1 | SEP 15TH"
          title="Kick-off call"
          description="Meet the GrowthX community members you will be learning with. Get clarity on how you will learn the CRAFT of Partnership Led Growth. Talk about common problems you've faced while building partnerships and learn from your peers. Get access to a pre-read for the deep dive."
        />
        <Session
          date="SESSION 2 | SEP 16TH"
          title="Partnerships Deep-Dive"
          description={(
            <ul className="list">
            <li>Is your product ready for partnerships? Key litmus test.</li>
            <li>How does partnerships change by stage of the product?</li>
            <li>
                Core nuances of product integrations.
                <ul className="list1">
                  <li>How to define the right success metrics?</li>
                  <li>How to define the right success metrics?</li>
                  <li>
                    How to go from customer feedback insight to conviction
                    building?
                  </li>
                  <li>Mental models to choose your 'Ideal Partner Profile</li>
                  <li>
                    Reach out plan for finding the right POC in a potential
                    partner company.
                  </li>
                  <li>
                    How to design first few calls, stakeholder alignment &
                    building trust with partners?
                  </li>
                  <li>
                    How to solve for early proof of concept & GTM limited
                    version?
                  </li>
                  <li>
                    How to build a cadence to drive integration adoption & track
                    success?
                  </li>
                </ul>
              </li>

              <li>
                Core nuances of channel partnerships.
                <ul className="list1">
                  <li> How to identify the right channel partners?</li>
                  <li>How to build an outreach strategy at Day 0?</li>
                  <li>
                    How to create segmentation between self serve onboarding vs
                    white glove onboarding for channel partners?
                  </li>
                  <li>
                    How to design for the marketing collaterals that helps
                    channel partners pitch effectively?
                  </li>
                  <li>
                 
                    How to create the right incentives for channel partners?
                  </li>
                  <li>
                 
                    How to track channel partner metric health & gamify for 1 to
                    100 scale?
                  </li>
                  <li>
                 
                    Key nuances of solving for churned channel partners.
                  </li>
                </ul>
              </li>

              <li>
             
                Case Studies include:
                <div class="logos-cont">
                  <img
                    src=" https://assets-global.website-files.com/63a49822ee2304acc9455a42/6502bc565a2a96c905daf3c3_logos-plg.png"
                    alt=""
                  />
                </div>
              </li>
            
          </ul>
          )}
        />
        <Session
        date="SESSION 3 | SEP 18TH"
        title="Project Briefing"
        description="Work with diverse set of peers - founders, strategy leaders, heads of partnerships, product, marketing, brand, & analytics to solve a partnership led problem statement in a live setting. This typically helps you solve cold-start problem while learning the CRAFT."
      />
      <Session
        date="SESSION 4 | SEP 23TH"
        title="Program Director's Circle (Live setting)"
        description="Go multiple layers deeper with your program director into the CRAFT. Absorb feedback being discussed about some of the top proof of work built by members. Get access to intense Q&A with your program director and deepen your understanding of the nuances in partnership led growth."
      />
      </div>
      <Testimonial />
    </div>
  );
}

export default PartnershipPage;
