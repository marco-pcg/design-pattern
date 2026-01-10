import { useState } from 'react'
import { Tweet } from './components/tweet/Tweet'
import { ThemeToggle } from './components/ThemeToggle'
import { TweetSearchResults } from './components/tweetSearch/TweetSearchResults'

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
          category='entertainment'
          isLocal={true}
          retweets={ ['yes', 'no']}
        />
        <TweetSearchResults
        />
        <ThemeToggle />
      </body>
    </>
  )
}

export default App
