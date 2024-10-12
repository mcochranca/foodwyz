import React, { useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    dietaryRestrictions: [],
    cookingTools: [],
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="onboarding-container">
      {step === 1 && (
        <div className="onboarding-step">
          <h2>Select Dietary Restrictions</h2>
          <p>Choose any dietary restrictions you have.</p>
          {/* Add checkboxes or UI elements to capture dietary restrictions */}
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="onboarding-step">
          <h2>Select Your Cooking Tools</h2>
          <p>Let us know what cooking tools you have available.</p>
          {/* Add UI elements to select cooking tools */}
          <button onClick={handlePrev} className="btn">Back</button>
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="onboarding-step">
          <h2>Review Preferences</h2>
          <p>You're all set! Here's a summary of your choices:</p>
          {/* Show selected dietary restrictions and tools */}
          <button onClick={handlePrev} className="btn">Back</button>
          <button onClick={() => {/* Finish onboarding */}} className="btn">Finish</button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
