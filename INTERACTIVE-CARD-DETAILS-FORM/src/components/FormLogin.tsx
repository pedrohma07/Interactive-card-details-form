import React from 'react'
import '../styles/components/formLogin.sass'

const FormLogin = () => {
  return (
    <div className='form-login'>
      <form action="">
        <div className='form-login-input-block'>
          <label for='cardholder'>CARDHOLDER NAME</label>
          <input type="text" id='cardholder' name='cardholder' placeholder='e.g. Jane Appleseed'/>
        </div>
        
        <div className='form-login-input-block'>
          <label for='card-number'>CARD NUMBER</label>
          <input type="number" name='card-number' id='card-number' placeholder='e.g. 1234 5678 9123 000'/>
        </div>
        <div className='form-date-cvc'>
          <div className='form-login-input-block'>
          <label for='date-month' htmlFor="">EXP. DATE (MM/YY)</label>
            <div className=' form-date'>
              <input type="number" name='date' id='date-month' placeholder='MM'/>
              <input type="number" name='date' id='date-year' placeholder='YY'/>
            </div>
            
          </div>
          
          <div className='form-login-input-block'>
            <label for='cvc'>CVC</label>
            <input type="number" id='cvc' name='cvc' placeholder='e.g. 123'/>
          </div>
        </div>
        <button type="submit" className='form-login-btn' form=''>Confirm</button>
      </form>      
    </div>
  )
}

export default FormLogin