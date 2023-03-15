import React, { useContext, useState, useEffect} from 'react'
import './pages.css';
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { CALENDAR_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';
import 'react-bootstrap'
import '../store/RoleStore'
import '../store/UserStore'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { login, signup } from '../http/userAPI'



const Auth = observer(() => {

  const {user} = useContext(Context);
  
  const location = useLocation()
  let isLogin = location.pathname === LOGIN_ROUTE
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(1)
  
  const navigate = useNavigate()

const click = async () => {
   
  try {
    let data;
    if (isLogin) { 
      data = await login(email, password); 
      console.log(data)
      console.log(email, password)
      
    } else {
      data = await signup(email, password, userRole) 
      

    }
    user.setUser(user)
    user.setIsAuth(true)
    user.setUserRole(user)

    console.log(user)
    
    return navigate(CALENDAR_ROUTE)
  } catch (e) {
    alert (e.response.data.message)
  }
}
  
  
  return (
    <div className='page page__auth'>
      <form className="form__auth" 
      
      onSubmit={e => e.preventDefault()}
      >


        {isLogin ?
        <div>
          <label >прошу, ваш логин</label>
          <input required={true} placeholder='email' type="text" value={email} name="email" id="email"
          onChange={e => setEmail(e.target.value)}
          />
          
          <label >прошу, ваш пароль</label>
          <input required={true} name="password" value={password} id="password"
          onChange={e => setPassword(e.target.value)}
          />
          
        </div>
        :
        <div>
          <label >прошу, задайте логин</label>
          <input required={true} placeholder='email' type="text" value={email} name="email" id="email"
          onChange={e => setEmail(e.target.value)}/>
        
          <label >прошу, придумайте пароль</label>
          <input required={true} type="password" name="password" value={password} id="password"
          onChange={e => setPassword(e.target.value)}/>
          
          <label>выберите свою роль</label>
          
          <div className='form__auth__radio'>
          {user.roles.map(role =>       
            <button className='btn__radio' onClick={e => setUserRole(e.target.value)} key={role.id} value={role.id}>{role.roles}</button>
          )}
          
          </div>
        </div>
        }
         
        <div className='form__auth__link'>
          <label>{isLogin ? 'новенький?' : 'старенький?'}</label>
          <Link className='form__auth-link' 
            to={isLogin ? SIGNUP_ROUTE : LOGIN_ROUTE}>
            {isLogin ? 'создай аккаунт' : 'авторизуйся'}
          </Link>
        </div>
       
       
       <button onClick={click}>{isLogin ? 'войти' : 'создать'}</button>
      </form>
      
    </div>
  )
})

export default Auth
