import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism, { highlightAll } from "prismjs"
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    prism.highlightAll()
    
  })
  const [code, setCode] = useState(`function sum() {return 1+1}`)
  const [review, setReview] = useState()

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review' ,{code} )
    setReview(response.data)
    // console.log(response.data)
  }

  return (
    <>
    <main>

      <div className="left">

        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code , prism.languages.javascript , 'javascript')}
            padding={10}
            style={{
              fontFamily:`"Fira code" , "Fira Mono" , monospace`,
              fontsize:16,
              border: '1px solid #ddd',
              borderRadius:"5px",
              height:'100%',
              width:"100%"
            }}
          />
        </div>


        <div onClick={reviewCode} className="btn">Review</div>
      </div>



      <div className="right">
        <Markdown  >
        {review}
        </Markdown> 
        
      </div>

    </main>
    </>
  )
}

export default App
