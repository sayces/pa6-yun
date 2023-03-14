import React from 'react'
import './pages.css';
import {Link} from 'react-router-dom'
const Auth = function () {



  return (
    <div className='page page__auth'>
      <form className="form__auth" action="" method="post">
        <div>
          <label for="name">прошу, ваш логин</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div>
          <label for="name">прошу, ваш пароль</label>
          <input type="text" name="name" id="name"/>
        </div>
        
        <button>войти</button>
        <label >новенький?</label>
        <Link>регистрируйся</Link>
      </form>
    </div>
  )
}

export default Auth
