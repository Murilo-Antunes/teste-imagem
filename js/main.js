'use strict'
import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"

const paginas = {
    preview: {
        titulo: "preview de Imagens",
        renderizar: criarPreview
    },
    login: {
        titulo: "login",
        renderizar: criarLogin
    }
}


export const renderizarPagina = (nomePagina) =>{
    const main = document.getElementById('main-content')
    let pagina = paginas[nomePagina].renderizar()

    main.replaceChildren(pagina)
}

renderizarPagina('login')
