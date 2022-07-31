import style from './App.module.scss'
import { Router } from './router/router'

function App() {
  return (
    <div className={style.App}>
      <>
        <Router />
      </>
    </div>
  )
}

export default App
