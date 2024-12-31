import React from 'react';

export default function Register(props) {
    const btnStyle = {
    backgroundColor: props.showPass ? 'red' : 'green',
    color: 'white'
  };
    

 
  const btnText = props.showPass ? 'Hide Password' : 'Show Password';
  const passBox = props.showPass ? 'text' : 'password';

  return ( 
    <div className='container card p-3 mt-2'>
      <h1 className='text-center'>Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group ">
          <label htmlFor="name" >Username</label>
          <input type="text" name="name" className='form-control' required />
        </div> 

        <div className="form-group registered">
          <label htmlFor="email" className='p-2'>E-mail:</label>
          <input type="email" name="email" className='form-control' required />
        </div>

        <div className="form-group registered">
          <label htmlFor="password" className='p-2'>Password</label>
          <input type={passBox} name="password" className='form-control' required />
        </div>

        <button type="submit" className='btn btn-primary m-4'>Register</button>
        <button type="button" style={btnStyle} className='btn' onClick={props.click}>
          {btnText}
        </button>
      </form>
    </div>
  );
}
