import './style.css'
import { renderApp, bindApp } from './app.js'

const root = document.querySelector('#app')
root.innerHTML = renderApp()
bindApp(root)
