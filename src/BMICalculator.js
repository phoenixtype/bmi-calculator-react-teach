// src/BMICalculator.js
import React, { useState } from "react";

const neumorphicStyle = {
  borderRadius: "10px",
  background: "#ffffff",
  boxShadow:
    "5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.5)",
};

const BMICalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(1));
    setBmiCategory(getBmiCategory(calculatedBmi));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal weight";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";
  };

  const inputWrapperStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const labelStyle = {
    width: "150px",
  };

  return (
    <div
      style={{
        width: "400px",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        border: "1px solid #d0d0d0",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
        ...neumorphicStyle,
      }}
    >
      <h1>BMI CALCULATOR</h1>
      <form onSubmit={calculateBMI}>
        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={neumorphicStyle}
          />
        </div>
        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Gender: </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={neumorphicStyle}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            style={neumorphicStyle}
          />
        </div>
        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            style={neumorphicStyle}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit" /*style={neumorphicStyle}*/>Compute BMI</button>
        </div>
      </form>
      {bmi && (
        <div>
          <h2>RESULT</h2>
          <p>Your Body Mass Index (BMI) is {bmi}</p>
          <p>Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
