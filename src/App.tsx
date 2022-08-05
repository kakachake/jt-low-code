import React, { Fragment } from 'react'
import style from './App.module.scss'
import { Router } from './router/router'
import { UserContext } from './context/UserContext'
import LoginModel from './components/LoginModel'

function App() {
  const {
    userInfo: { login },
    setUserInfo
  } = React.useContext(UserContext)

  const handleLogin = () => {
    setUserInfo((v) => {
      const status = { login: !v.login }
      return status
    })
  }
  return (
    <Fragment>
      <button onClick={handleLogin} style={{ position: 'absolute', zIndex: 999 }}>
        临时切换登录状态
      </button>
      {login ? (
        <div className={style.App}>
          <>
            <Router />
          </>
        </div>
      ) : (
        <LoginModel />
      )}
    </Fragment>
  )
}

export default App
