import { useState } from 'react'
import { Tweet } from './components/tweet/Tweet'
import { ThemeToggle } from './components/ThemeToggle'

function App() {

  return (
    <>
      <body>
        <Tweet 
          author={{
            name: 'opa',
            avatarUrl: 'src/image'
          }} 
          text={'landing'} 
          date={new Date()}
        />
        <ThemeToggle />
      </body>
    </>
  )
}

export default App
