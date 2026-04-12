import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/lighthope.css';
import lampImage from '../assets/images/lamp.png';
import LogoCarousel from "../components/LogoCarousel";

export default function LightHope() {
  const navigate = useNavigate();

  const leaders = [
    {
      quote: `Has repeatedly described energy access as essential for development and climate resilience in Africa, emphasizing renewable energy as a major opportunity for the continent.`,
      name: 'António Guterres'
    },
    {
      quote: `Through the African Development Bank’s “Light Up and Power Africa” initiative, has pushed for large-scale investment in grids, mini-grids, and renewable power across the continent.`,
      name: 'Akinwumi Adesina'
    },
    {
      quote: `Has linked reliable electricity to industrial growth and Africa’s ability to compete in global trade and manufacturing value chains.`,
      name: 'Ngozi Okonjo-Iweala'
    },
    {
      quote: `Has promoted renewable energy expansion, highlighting Kenya’s geothermal development as a model for sustainable power generation.`,
      name: 'William Ruto'
    },
    {
      quote: `Has supported rural electrification programs aimed at improving education, healthcare delivery, and women-led enterprises.`,
      name: 'Samia Suluhu Hassan'
    },
    {
      quote: `Has framed electricity and digital infrastructure as foundational to modernization and economic transformation.`,
      name: 'Paul Kagame'
    },
       {
      quote: `Has advocated for energy access as a human right and a critical enabler of economic opportunity, particularly for youth.`,
      name: 'Nkosazana Dlamini-Zuma'
    },
    {
      quote: `Has emphasized the importance of energy access for education, healthcare, and economic empowerment in his vision for Africa’s future.`,
      name: 'Kofi Annan'
    },
    {
      quote: `Has highlighted the role of energy access in improving quality of life and economic prospects for African communities, particularly in rural areas.`,
      name: 'Ellen Johnson Sirleaf'
    },
    {
      quote: `Has championed the role of energy access in driving economic growth and reducing poverty, particularly through renewable energy solutions.`,
      name: 'Mozambique President Filipe Nyusi'
    },

    
      {quote: `Has emphasized the critical role of energy access in unlocking Africa’s economic potential and improving quality of life, particularly for underserved communities.`,
      name: 'Bob Ufomado'
    },
    {
      quote: `Advocates broadband expansion, data centers, and digital infrastructure to enable Africa’s economic leap forward.`,
      name: 'Strive Masiyiwa'
    },
    {
      quote: `Has emphasized industrialization, energy security, and domestic manufacturing as pillars of Africa’s long-term strength.`,
      name: 'Aliko Dangote'
    },
    {
      quote: `Has encouraged digital entrepreneurship and innovation among young African founders through investment initiatives.`,
      name: 'Jack Ma'
    },
    {
      quote: `Has spoken about digital public goods, energy innovation, and technology investment to accelerate development outcomes in Africa.`,
      name: 'Bill Gates'
    },
    {
      quote: `During post-apartheid reconstruction, electrification was recognized as essential for equality, dignity, and economic participation.`,
      name: 'Nelson Mandela'
    },
   
    {
      quote: `Has emphasized the critical role of energy access in unlocking Africa’s economic potential and improving quality of life, particularly for underserved communities.`,
      name: 'Philip Illuonakhalume'
    },
   
    {
      quote: `Through the Power Africa initiative, supported expanding electricity access to drive economic growth and private-sector investment.`,
      name: 'Barack Obama'
    },
    {
  quote: "Warns that energy poverty remains one of the world’s greatest barriers to development and urges accelerated investment to bring electricity to every household in Africa.",
  name: "Fatih Birol"
},
{
  quote: "Advocates for accelerating clean energy production and expanding access, emphasizing that a just energy transition must support developing nations.",
  name: "Luiz Inácio Lula da Silva"
}
,
{
  quote: "Calls on world leaders to set ambitious renewable energy targets and scale up action to deliver electricity access and clean power for all.",
  name: "Global Renewables Alliance"
}


  ];

  return (
    <div className="light-root">

      {/* NAVIGATION */}
      <div className="light-nav">
        <button className="nav-arrow" onClick={() => navigate('/task')}>
          ←
        </button>
        <button className="nav-home" onClick={() => navigate('/')}>
          Home
        </button>
      </div>

      <div className="light-content">

        {/* IMAGE + TITLE + GLOW */}
        <div className="title-block">
          <div className="title-image">
            <img
              src={lampImage}
              alt="Old man holding lamp with daughter behind him in the dark"
            />
            <div className="lamp-glow"></div>
            <div className="image-overlay-title">
              Light & Hope
            </div>
          </div>
        </div>

        {/* LEADERS */}
        {leaders.map((leader, idx) => (
          <div key={idx} className="leader-block">
            <p className="leader-quote">{leader.quote}</p>
            <div className="leader-name">
              <span className="name-line"></span>
              <span>{leader.name}</span>
            </div>
          </div>
        ))}

        {/* FINAL MESSAGE */}
        <div className="final-message">
          <p>
            Africa does not lack intelligence, resources, or ambition.
            It lacks stable, universal electricity.
          </p>

          <p>
            Governments may define direction — but companies must build reality.
            Utilities, engineers, manufacturers, financiers, and technology
            firms must be prepared to make tremendous long-term sacrifices.
          </p>

          <p className="closing-strong">
            Power is not charity.
            It is infrastructure.
            It is sovereignty.
            The responsibility now belongs to those who build.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="carousel-space">
          <LogoCarousel />
        </div>

      </div>




{/* EXISTING BOTTOM TEXT */}
<div
  style={{
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.85rem",
    lineHeight: "1.4",
    marginTop: "40px",
    paddingBottom: "10px"
  }}
>
  <div>Light & Hope — A Vision for a Powered Africa</div>
  <div>Guided by truth. Driven by purpose.</div>
  <div>For every village. Every city. Every generation.</div>
</div>

{/* MINIMAL FOOTER LINKS */}
<footer className="lite-footer">
  <div className="lite-footer-links">
    <a href="/about">About</a>
    <span className="divider">|</span>
    <a href="/contact">Contact</a>
    <span className="divider">|</span>
    <a href="/privacy-policy">Privacy Policy</a>
    <span className="divider">|</span>
    <a href="/terms">Terms</a>
    <span className="divider">|</span>
    <a href="/disclaimer">Disclaimer</a>
  </div>
</footer>









    </div>
  );
}
