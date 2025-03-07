<template>
  <div class="container">
    <div class="vercel-logo">
      <img src="/vercel-logo.svg" alt="Vercel Logo" />
    </div>
    <h1 class="form-title">Continue with Vercel</h1>
    <p class="form-subtitle">Sign in to v0 using your Vercel account.</p>
    
    <form @submit.prevent="handleLogin" class="login-form">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      
      <div>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Work Email" 
          class="email-input" 
          required
        />
      </div>
      
      <button type="submit" class="continue-button">
        Continue with Email
      </button>
      
      <div class="divider">
        <span class="divider-line"></span>
      </div>
      
      <div class="social-login">
        <button class="social-button github" @click="loginWithGithub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </button>
        <button class="social-button gitlab" @click="loginWithGitlab">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
          </svg>
        </button>
        <button class="social-button bitbucket" @click="loginWithBitbucket">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.778 1.211c-.394-.392-1.039-.386-1.429.007-.186.186-.3.442-.302.713l1.863 11.185c.074.44.462.764.912.764h7.92c.34 0 .638-.231.714-.562.239-1.05.399-1.729.481-2.073.123-.51.246-1.019.37-1.527.125-.51.313-1.274.567-2.296.254-1.024.523-2.063.808-3.118.284-1.055.51-1.935.676-2.639.14-.592.21-1.033.21-1.325 0-.483-.143-.858-.428-1.129zm19.538 5.992c-.216-.851-.551-1.632-1.005-2.341-.454-.71-1.011-1.318-1.672-1.825-.66-.507-1.387-.912-2.18-1.213-.792-.302-1.632-.453-2.52-.453-.887 0-1.726.151-2.519.453-.792.301-1.519.706-2.179 1.213-.661.507-1.218 1.115-1.673 1.825-.454.709-.789 1.49-1.004 2.341-.216.852-.324 1.747-.324 2.687 0 .94.108 1.836.324 2.687.215.852.55 1.633 1.004 2.342.455.709 1.012 1.317 1.673 1.825.66.507 1.387.911 2.179 1.212.793.302 1.632.453 2.519.453.888 0 1.728-.151 2.52-.453.793-.301 1.52-.705 2.18-1.212.661-.508 1.218-1.116 1.672-1.825.454-.709.789-1.49 1.005-2.342.216-.851.323-1.747.323-2.687 0-.94-.107-1.835-.323-2.687zm-3.584 5.403c-.168.662-.405 1.261-.714 1.798-.308.536-.677.993-1.108 1.37-.43.376-.905.662-1.424.858-.52.196-1.063.294-1.632.294s-1.113-.098-1.633-.294c-.519-.196-.994-.482-1.424-.858-.43-.377-.8-.834-1.108-1.37-.308-.537-.546-1.136-.714-1.798-.168-.662-.252-1.359-.252-2.089 0-.731.084-1.428.252-2.089.168-.662.406-1.261.714-1.798.308-.536.678-.993 1.108-1.37.43-.376.905-.662 1.424-.858.52-.196 1.064-.294 1.633-.294s1.112.098 1.632.294c.519.196.994.482 1.424.858.431.377.8.834 1.108 1.37.309.537.546 1.136.714 1.798.168.661.252 1.358.252 2.089 0 .73-.084 1.427-.252 2.089z"/>
          </svg>
        </button>
      </div>
      
      <div class="saml-passkey-options">
        <button class="saml-button" @click="loginWithSAML">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Continue with SAML SSO
        </button>
        
        <button class="passkey-button" @click="loginWithPasskey">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
          Continue with Passkey
        </button>
      </div>
    </form>
    
    <div class="signup-option">
      <span>Don't have a Vercel account?</span>
      <a href="#" @click.prevent="toggleSignUp">Sign Up</a>
    </div>
    
    <div v-if="showSignUp" class="modal">
      <div class="modal-content">
        <h2 class="modal-title">Create Account</h2>
        <input type="text" v-model="signupName" placeholder="Name" class="email-input" />
        <input type="email" v-model="signupEmail" placeholder="Email" class="email-input" />
        <input type="password" v-model="signupPassword" placeholder="Password" class="email-input" />
        <input type="password" v-model="signupConfirmPassword" placeholder="Confirm Password" class="email-input" />
        <div class="modal-buttons">
          <button @click="signup" class="continue-button">Sign Up</button>
          <button @click="toggleSignUp" class="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const email = ref('')
    const password = ref('')
    const errorMessage = ref('')
    
    const showSignUp = ref(false)
    const signupName = ref('')
    const signupEmail = ref('')
    const signupPassword = ref('')
    const signupConfirmPassword = ref('')
    
    const handleLogin = () => {
      // 模拟登录逻辑
      if (email.value) {
        errorMessage.value = ''
        alert('登录邮件已发送!')
      } else {
        errorMessage.value = '请输入有效的邮箱地址'
      }
    }
    
    const toggleSignUp = () => {
      showSignUp.value = !showSignUp.value
    }
    
    const signup = () => {
      // 模拟注册逻辑
      if (signupPassword.value !== signupConfirmPassword.value) {
        alert('密码不匹配')
        return
      }
      
      alert(`账号已创建: ${signupName.value} (${signupEmail.value})`)
      showSignUp.value = false
    }
    
    const loginWithGithub = () => {
      alert('使用GitHub登录')
    }
    
    const loginWithGitlab = () => {
      alert('使用GitLab登录')
    }
    
    const loginWithBitbucket = () => {
      alert('使用Bitbucket登录')
    }
    
    const loginWithSAML = () => {
      alert('使用SAML SSO登录')
    }
    
    const loginWithPasskey = () => {
      alert('使用Passkey登录')
    }
    
    return {
      email,
      password,
      errorMessage,
      handleLogin,
      showSignUp,
      signupName,
      signupEmail,
      signupPassword,
      signupConfirmPassword,
      toggleSignUp,
      signup,
      loginWithGithub,
      loginWithGitlab,
      loginWithBitbucket,
      loginWithSAML,
      loginWithPasskey
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background-color: #ffffff !important;
  color: #000000 !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  max-width: 420px;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vercel-logo {
  margin-bottom: 2rem;
  text-align: center;
}

.vercel-logo img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
}

.form-subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
}

.login-form {
  width: 100%;
}

.email-input {
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  color: #000000;
  padding: 0.8rem 1rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-size: 1rem;
}

.email-input:focus {
  outline: none;
  border-color: #0070f3;
}

.continue-button {
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.8rem 1rem;
  width: 100%;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

.continue-button:hover {
  opacity: 0.9;
}

.divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider-line {
  flex-grow: 1;
  height: 1px;
  background-color: #e5e5e5;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-button {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  color: #000000;
  cursor: pointer;
}

.social-button:hover {
  background-color: #f5f5f5;
}

.saml-passkey-options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.saml-button, .passkey-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  color: #000000;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.saml-button:hover, .passkey-button:hover {
  background-color: #f5f5f5;
}

.signup-option {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
}

.signup-option a {
  color: #0070f3;
  text-decoration: none;
  margin-left: 0.5rem;
}

.signup-option a:hover {
  text-decoration: underline;
}

.error-message {
  color: #ff0000;
  margin-bottom: 1rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.modal-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.cancel-button {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #e5e5e5;
  padding: 0.8rem 1rem;
  flex: 1;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #f5f5f5;
}
</style> 