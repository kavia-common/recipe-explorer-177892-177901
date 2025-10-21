import React, { useEffect, useRef, useState } from 'react';
import './SignIn235.css';

// PUBLIC_INTERFACE
export default function SignIn235() {
  /**
   * Sign In screen (Screen 11:235) translated to React.
   * - Pixel-accurate layout maintained via CSS classes copied from assets.
   * - Password toggle and basic validation implemented via React state/effects.
   */
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [pwVisible, setPwVisible] = useState(false);

  useEffect(() => {
    // Mirror the behavior in assets/sign-in-11-235.js
    const form = formRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = emailRef.current ? emailRef.current.value : '';
      const password = passwordRef.current ? passwordRef.current.value : '';

      const errors = [];
      if (!email) errors.push('Email is required.');
      if (!password) errors.push('Password is required.');

      if (errors.length) {
        // eslint-disable-next-line no-alert
        alert(errors.join('\n'));
        return;
      }

      // eslint-disable-next-line no-alert
      alert('Sign In clicked. Implement submission to backend as needed.');
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  const togglePassword = () => {
    setPwVisible((prev) => !prev);
  };

  return (
    <div className="screen-center">
      <main className="screen-11-235" role="main" aria-label="Sign In screen">
        {/* Status Bar (top iOS bar) */}
        <div className="status-bar" aria-hidden="true">
          <div className="symbols">
            <div className="battery">
              <img src="/figmaimages/figma_image_13_71_128_306_b5e63c63.svg" alt="" />
              <img src="/figmaimages/figma_image_13_71_128_307_97b3d1ff.svg" alt="" />
            </div>
            <div className="signal">
              <img src="/figmaimages/figma_image_13_71_128_311_74e08aed.svg" alt="Cellular signal bar 1" />
              <img src="/figmaimages/figma_image_13_71_128_312_4153a623.svg" alt="Cellular signal bar 2" />
              <img src="/figmaimages/figma_image_13_71_128_313_a9f566ce.svg" alt="Cellular signal bar 3" />
              <img src="/figmaimages/figma_image_13_71_128_314_664f77c4.svg" alt="Cellular signal bar 4" />
            </div>
            <div className="wifi" aria-hidden="true"></div>
          </div>
          <div className="time" aria-label="device time">19:27</div>
        </div>

        {/* Title Group */}
        <header className="title-group">
          <h1 className="hello" aria-level="1" role="heading">Hello,</h1>
          <p className="welcome">Welcome Back!</p>
        </header>

        {/* Sign In Form */}
        <form className="signin-form" aria-label="Sign in form" ref={formRef} noValidate>
          {/* Email Field */}
          <div className="field email-field">
            <label htmlFor="email-input" className="field-label">Email</label>
            <div className="field-box">
              <input
                id="email-input"
                name="email"
                type="email"
                aria-label="Email"
                placeholder="Enter Email"
                ref={emailRef}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="field password-field">
            <label htmlFor="password-input" className="field-label">Enter Password</label>
            <div className="field-box">
              <input
                id="password-input"
                name="password"
                type={pwVisible ? 'text' : 'password'}
                aria-label="Password"
                placeholder="Enter Password"
                ref={passwordRef}
              />
              <button
                type="button"
                className="toggle-password"
                aria-label={pwVisible ? 'Hide password' : 'Show password'}
                aria-pressed={pwVisible ? 'true' : 'false'}
                title="Show/Hide password"
                onClick={togglePassword}
              >
                👁️
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          {/* Big Button */}
          <button type="submit" className="big-button" aria-label="Sign In">
            <span className="big-button-label">Sign In</span>
            <img className="big-button-icon" src="/figmaimages/figma_image_54_668_53_625_ee410d62.svg" alt="" aria-hidden="true" />
          </button>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line left"></span>
            <span className="divider-text">Or Sign in With</span>
            <span className="divider-line right"></span>
          </div>

          {/* Social Buttons */}
          <div className="social-row" role="group" aria-label="Sign in with social accounts">
            {/* Google */}
            <button type="button" className="social-btn google" aria-label="Sign in with Google">
              <img className="social-btn-bg" src="/figmaimages/figma_image_13_36_33a0897e.svg" alt="" aria-hidden="true" />
              <img className="social-icon google-icon" src="/figmaimages/figma_image_13_39_ffad8cec.svg" alt="Google logo" />
              <img className="social-icon google-icon-2" src="/figmaimages/figma_image_13_42_83962b79.svg" alt="" aria-hidden="true" />
            </button>

            {/* Facebook */}
            <button type="button" className="social-btn facebook" aria-label="Sign in with Facebook">
              <img className="social-icon facebook-icon" src="/figmaimages/figma_image_13_58_e6c4938f.svg" alt="Facebook logo" />
            </button>
          </div>

          {/* Sign Up prompt */}
          <p className="signup-hint">
            Don’t have an account? <a href="#" className="signup-link" aria-label="Sign up">Sign up</a>
          </p>
        </form>

        {/* Home Indicator */}
        <div className="home-indicator" aria-hidden="true">
          <div className="home-line"></div>
        </div>
      </main>
    </div>
  );
}
