import React, { Component } from 'react'

export default class extends Component {

 render(){
  return (
    <div>
      <h1>Code Up Girls</h1>
       <style jsx global>{`
            body {
              padding: 0;
              margin: 0;
              display: block;
            }
            div {
              height: 100vh;
              width: 100vw;
              background-color: black;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            h1 {
              color: pink;
            }
          `}</style>
    </div>
  )
 }
}
