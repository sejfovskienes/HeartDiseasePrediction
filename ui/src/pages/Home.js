import React, { useState } from 'react';

export default function MedicalForm() {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
    target: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div style={styles.container}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>
      
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Medical Assessment Form</h1>
          <p style={styles.subtitle}>Please fill in all required fields</p>
          
          <div style={styles.formContent}>
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter age"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Sex</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>Female</option>
                  <option value="1" style={styles.option}>Male</option>
                </select>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Chest Pain Type (CP)</label>
                <select
                  name="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>Type 0</option>
                  <option value="1" style={styles.option}>Type 1</option>
                  <option value="2" style={styles.option}>Type 2</option>
                  <option value="3" style={styles.option}>Type 3</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Resting BP (trestbps)</label>
                <input
                  type="number"
                  name="trestbps"
                  value={formData.trestbps}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="mm Hg"
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Cholesterol (chol)</label>
                <input
                  type="number"
                  name="chol"
                  value={formData.chol}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="mg/dl"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Fasting Blood Sugar (fbs)</label>
                <select
                  name="fbs"
                  value={formData.fbs}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>≤ 120 mg/dl</option>
                  <option value="1" style={styles.option}>> 120 mg/dl</option>
                </select>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Resting ECG (restecg)</label>
                <select
                  name="restecg"
                  value={formData.restecg}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>Normal</option>
                  <option value="1" style={styles.option}>ST-T Wave</option>
                  <option value="2" style={styles.option}>Hypertrophy</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Max Heart Rate (thalach)</label>
                <input
                  type="number"
                  name="thalach"
                  value={formData.thalach}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="bpm"
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Exercise Angina (exang)</label>
                <select
                  name="exang"
                  value={formData.exang}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>No</option>
                  <option value="1" style={styles.option}>Yes</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>ST Depression (oldpeak)</label>
                <input
                  type="number"
                  step="0.1"
                  name="oldpeak"
                  value={formData.oldpeak}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="0.0"
                />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Slope</label>
                <select
                  name="slope"
                  value={formData.slope}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>Upsloping</option>
                  <option value="1" style={styles.option}>Flat</option>
                  <option value="2" style={styles.option}>Downsloping</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>CA (vessels colored)</label>
                <select
                  name="ca"
                  value={formData.ca}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>0</option>
                  <option value="1" style={styles.option}>1</option>
                  <option value="2" style={styles.option}>2</option>
                  <option value="3" style={styles.option}>3</option>
                </select>
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Thal</label>
                <select
                  name="thal"
                  value={formData.thal}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>Normal</option>
                  <option value="1" style={styles.option}>Fixed Defect</option>
                  <option value="2" style={styles.option}>Reversible Defect</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Target</label>
                <select
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="" style={styles.option}>Select</option>
                  <option value="0" style={styles.option}>No Disease</option>
                  <option value="1" style={styles.option}>Disease</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              style={styles.submitButton}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Submit Assessment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100px, -100px) rotate(90deg); }
          50% { transform: translate(200px, 50px) rotate(180deg); }
          75% { transform: translate(-50px, 100px) rotate(270deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-150px, 100px) rotate(-90deg); }
          50% { transform: translate(-100px, -80px) rotate(-180deg); }
          75% { transform: translate(80px, -120px) rotate(-270deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  blob1: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #ff00ff, #8000ff)',
    filter: 'blur(80px)',
    opacity: 0.6,
    top: '10%',
    left: '10%',
    animation: 'float1 7 ease-in-out infinite',
    zIndex: 1,
  },
  blob2: {
    position: 'absolute',
    width: '450px',
    height: '450px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #00ffff, #0080ff)',
    filter: 'blur(80px)',
    opacity: 0.6,
    bottom: '10%',
    right: '10%',
    animation: 'float2 8s ease-in-out infinite',
    zIndex: 1,
  },
  formWrapper: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '800px',
  },
  formContainer: {
    backgroundColor: 'rgba(200, 200, 200, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '48px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '16px',
    margin: '0 0 32px 0',
    textAlign: 'center',
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '500',
  },
  input: {
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  select: {
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  option: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '8px',
  },
  submitButton: {
    marginTop: '16px',
    padding: '16px 32px',
    backgroundColor: '#8000ff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(128, 0, 255, 0.4)',
  },
};