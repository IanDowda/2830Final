import React, {useState} from 'react'


import Logo from '../components/headers/logo'
import TextPosting from '../components/mainpage/textposting'
import Logintest from '../components/headers/Logintest'
import Ad from "../components/headers/Ad"
import Display from '../components/mainpage/textdisplay'


function Home() {
  const [loggedin, setloggedin] = useState(false);
  const HandleLogin = (isloggedin) => {
    setloggedin(isloggedin);
  }
  return (
    <body>
      <div className="App">
          <header>
              <div className="Login">
                  <Logintest OnLogin={HandleLogin} className = "logincss"/>
                  <Logo className = "logocss"></Logo>
              </div>
          </header>
          <main>
              <div className="section-grid">
                  <Ad className = "section" />
                  {loggedin && <TextPosting className = "section"/>}
                  <Display/>
              </div>
          </main>
      </div>
    </body>
  )
}

export default Home
