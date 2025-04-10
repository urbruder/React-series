import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}
//At the end every element is stored in this format(given below) only
// const reactElement={
//   type:'a',//Type may be div or a or p or any other tag name
//   props: {//It is an object which has several properties
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit google'
//}
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement=React.createElement(
'a',
{href:'https://google.com',target:'_blank'},
'click me to visit google'
)


createRoot(document.getElementById('root')).render(    
    // reactElement
    <App/>
)

