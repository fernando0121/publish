import "../second/About.css";
import imageteam from "../../images/team.png";

function About() {
    return (
        <div className="container">
            <div id="hereAbout"></div>
            <br /><br />
            <img src={imageteam} alt="Team" />
            <h1 id="aboutUS">About Us</h1>
            <p>Our mission at GearMax is to offer a wide range of high-quality vehicles to suit every need and budget. 
                Whether you're visiting Milan for business or pleasure, our diverse fleet of cars ensures that you'll 
                find the perfect vehicle to enhance your travel experience.

</p>

            <h2>Our Mission</h2>
            <p>Our mission at GearMax is to offer a wide range of high-quality vehicles to suit every need and budget.
                 Whether you're visiting Milan for business or pleasure, our diverse fleet of cars ensures that you'll
                  find the perfect vehicle to enhance your travel experience.

</p>
<h2>Why Choose GearMax?
</h2>

    <ul id="list">
        <li><span className="bold">Quality Vehicles:</span> We carefully maintain our fleet to ensure that every car meets the highest standards of safety, 
            reliability, and cleanliness.</li>
            <li>
                <span className="bold">Convenient Locations: </span>With multiple convenient locations throughout Milan, renting a car with GearMax is always hassle-free.
            </li>
            <li>
                <span className="bold">Exceptional Service: </span>Our friendly and knowledgeable staff are here to assist you every step of the way, from choosing the right 
                vehicle to providing helpful tips for your journey.
            </li>
            <li>
                <span className="bold">Competitive Prices:</span> We offer competitive rates and flexible rental options to accommodate your budget and schedule.
            </li>
    </ul>
    <h2>Explore Milan with GearMax</h2>
    <p>Whether you're exploring the vibrant streets of Milan, embarking on a scenic road trip through the Italian countryside, or simply need a reliable vehicle for your daily commute, 
GearMax has you covered. Experience the freedom and flexibility of car rental with GearMax and make the most of your time in Milan.</p>

        </div>
    );
}

export default About;
