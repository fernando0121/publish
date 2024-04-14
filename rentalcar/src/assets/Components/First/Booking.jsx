import React, { useState } from "react";
import carImage from "../../images/car-top.png";
import "./booking.css";

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [carPrices, setCarPrices] = useState({
    "Toyota Corolla": { perHour: 10, perKm: 0.1 },
    "Honda Civic": { perHour: 12, perKm: 0.12 },
    "Volkswagen Golf": { perHour: 15, perKm: 0.15 },
    // Add prices for other car models here
  });

  const handleSubmit = () => {
    if (name && fromDate && toDate && email && phoneNumber && selectedCarType && selectedCarModel) {
      setSubmitted(true);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleCarTypeChange = (e) => {
    setSelectedCarType(e.target.value);
    setSelectedCarModel(""); // Reset selected car model when car type changes
  };

  return (
    <div className="booking">
      <div id="hereHome"><br /><br /><br /></div>
      <div id="card">
        {submitted ? (
          <p>Thank you for choosing us. We will get back to you as soon as possible.</p>
        ) : (
          <>
            <p>
              your name:
              <input
                type="text"
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              From:
              <input
                type="date"
                required
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              To:
              <input
                type="date"
                required
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
             />
            </p>
            <p>
              Email:
              <input
                type="email"
                placeholder="someone@gmail.com *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <p>
              Telephone:<input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="*"/>
            </p>
            <p>
              Car Type:
              <select value={selectedCarType} onChange={handleCarTypeChange}>
                <option value="">Select Car Type</option>
                <option value="Compact">Compact Cars</option>
                <option value="Sedan">Sedans</option>
                <option value="SUV">SUVs</option>
                <option value="Luxury">Luxury Cars</option>
                <option value="Sports">Sports Cars</option>
              </select>
            </p>
            {selectedCarType && (
              <p>
                Car Model:
                <select value={selectedCarModel} onChange={(e) => setSelectedCarModel(e.target.value)}>
                  <option value="">Select Car Model</option>
                  {Object.keys(carPrices).map((model, index) => (
                    <option key={index} value={model}>{model}</option>
                  ))}
                </select>
              </p>
            )}
            {selectedCarModel && (
              <p>
                Price per Hour: {carPrices[selectedCarModel].perHour}€
              </p>
            )}
            <br />
            <br />
            <button id="submit" onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}
      </div>
      <div>
        <img src={carImage} alt="" />
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Booking;
