'use strict'
import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"

const main = document.getElementById('main-content')

const pagina = criarLogin()

main.appendChild(pagina)