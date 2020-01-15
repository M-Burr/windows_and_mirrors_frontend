import React from 'react';
import ReactDOM from 'react-dom';
// or
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
  this.PaymentResponse.googleAuthCB(response.profileObj.googleId);

  showBothLogins = () => {
    return(
      <section className="btn btn-google">
        <GoogleLogin 
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
      </section>
    );
  }

  render(
    return(
    <section>{this.props}</section>
    )
  );
}


 


export default GoogleLogin