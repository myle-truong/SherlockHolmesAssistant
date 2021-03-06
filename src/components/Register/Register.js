import React from 'react';

const Register = ({onRouteChange}) => {
  return (
    <div>
      <article class="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-2 center">
        <main className="pa4 white-80">
            <form className="measure">
              <fieldset 
              id="sign_up" 
              className="ba b--transparent ph0 mh0">
                <legend 
                className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                    <label 
                    className="db fw6 lh-copy f6" 
                    for="name">Full Name</label>
                    <input 
                    className="pa2 input-reset ba b--white bg-transparent hover-bg-navy hover-white w-100" 
                    type="text" 
                    name="name"  
                    id="name" />
                  </div>
                  <div className="mt3">
                    <label 
                    className="db fw6 lh-copy f6" 
                    for="email-address">Email</label>
                    <input 
                    className="pa2 input-reset ba b--white bg-transparent hover-bg-navy hover-white w-100" 
                    type="email" 
                    name="email-address"  
                    id="email-address" />
                  </div>
                  <div className="mv3">
                    <label 
                    className="db fw6 lh-copy f6" 
                    for="password">Password</label>
                    <input 
                    className="b pa2 input-reset ba  b--white bg-transparent hover-bg-navy hover-white w-100" 
                    type="password" 
                    name="password"  
                    id="password" />
                  </div>
              </fieldset>
              <div className="">
                <input 
                onClick = {() => onRouteChange('home')}
                className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" 
                type="submit" 
                value="Signin"/>
              </div>
          </form>
        </main>
      </article>
    </div>
  )
}
export default Register;
