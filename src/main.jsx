import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// const Button = ({ text }) => { //Los compponentes son siempre PASCAL CASE (PRIMERA CON MAYUS!!!)
//     return (
//         <button>{text}</button>
//     )
// }
// root.render(
//     //al ser un parámetro lo que se renderiza, si es más de un elemento debe ir agrupado en una sola cosa - react.frangment
//     <React.Fragment>
//         <Button text="button 1" />

//     </React.Fragment>
// )

root.render(
    <App />
)