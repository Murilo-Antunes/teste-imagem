'use strict'

export function criarLogin() {
    const formulario = document.createElement('form')
    const emailInput = document.createElement('input')
    const senhaInput = document.createElement('input')
    const loginButton = document.createElement('button')
    
    emailInput.className = 'form-input'
    emailInput.type = 'email'
    emailInput.placeholder = 'Digite seu email'

    senhaInput.type = 'password'
    senhaInput.placeholder = 'Digite sua senha'
    senhaInput.className = 'form-input'

    
    loginButton.type = 'button'
    loginButton.textContent = 'ENTRAR'
    loginButton.className = 'button'
    
    formulario.append(emailInput, senhaInput, loginButton)
    return formulario
}
