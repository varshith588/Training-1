import React from 'react'
import Styles from "./Form.css"
const Dashboard = () => {
  return (
    <div className="form-container">
      <section id={Styles.from}/>
      <form>
        <input type="text" placeholder="Username" className="input-field" /><br/>
        <input type="email" placeholder="Email" className="input-field" /><br/>
        <input type="password" placeholder="Password" className="input-field" /><br/>
        <div className="gender-section">
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
          <input type="radio" name="gender" value="other" /> Other
        </div>

        <textarea placeholder="Address" className="input-field textarea"></textarea>

        <div className="file-upload">
          <label>File:</label>
          <input type="file" />
        </div>

        <select className="dropdown">
          <option value="">Select Country</option>
          <option value="INDIA">INDIA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select><br/>

        <button type="submit" className="submit-button">signin</button>
      </form>
      <section/>
    </div>

  )
}

export default Dashboard