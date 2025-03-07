import { defineComponent, ref, computed } from 'vue'
import VercelLogo from './VercelLogo'
import SocialButton from './SocialButton'

export default defineComponent({
  name: 'LoginCard',
  setup() {
    const email = ref('')
    const isEmailValid = ref(true)
    const emailError = ref('')

    // 邮箱验证正则表达式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    // 验证邮箱格式
    const validateEmail = () => {
      if (!email.value) {
        isEmailValid.value = false
        emailError.value = '请输入邮箱地址'
        return false
      }
      
      if (!emailRegex.test(email.value)) {
        isEmailValid.value = false
        emailError.value = '请输入有效的邮箱地址'
        return false
      }
      
      isEmailValid.value = true
      emailError.value = ''
      return true
    }

    // 输入框样式
    const inputClass = computed(() => {
      return {
        'input-field': true,
        'input-error': !isEmailValid.value
      }
    })

    const handleEmailLogin = () => {
      if (validateEmail()) {
        console.log('Email login with:', email.value)
      }
    }

    const handleSocialLogin = (provider: string) => {
      console.log('Social login with:', provider)
    }

    return () => (
      <div class="login-card">
        <div class="logo">
          <VercelLogo />
        </div>
        
        <h1 class="title">Continue with Vercel</h1>
        <p class="subtitle">Sign in to v0 using your Vercel account.</p>
        
        <input 
          type="email" 
          class={inputClass.value}
          placeholder="Work Email" 
          v-model={email.value}
          onBlur={validateEmail}
          onInput={() => { if (!isEmailValid.value) validateEmail() }}
        />
        
        {!isEmailValid.value && <div class="error-message">{emailError.value}</div>}
        
        <button class="btn btn-primary" onClick={handleEmailLogin}>
          Continue with Email
        </button>
        
        <div class="divider">
          <span class="divider-text">OR</span>
        </div>
        
        <div class="social-buttons">
          <SocialButton 
            icon="github" 
            onClick={() => handleSocialLogin('github')} 
          />
          <SocialButton 
            icon="gitlab" 
            onClick={() => handleSocialLogin('gitlab')} 
          />
          <SocialButton 
            icon="bitbucket" 
            onClick={() => handleSocialLogin('bitbucket')} 
          />
        </div>
        
        <div class="footer">
          Don't have a Vercel account? <a href="#">Sign Up</a>
        </div>
      </div>
    )
  }
}) 