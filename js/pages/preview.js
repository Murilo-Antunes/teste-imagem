export const criarPreview = () =>{
    const form = document.createElement('form')
    const previewContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const previewInput = document.createElement('input')
    const previewLabel = document.createElement('label')
    const previewImage = document.createElement('img')
    const uploadButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    previewContainer.className = 'preview-container'
    buttonContainer.className = 'button-container'

    previewInput.id = 'preview-input'
    previewInput.className = 'preview-input'
    previewInput.type = 'file'
    previewInput.accept = 'image/*'

    previewLabel.className = 'preview-label'
    previewLabel.htmlFor = 'preview-input'

    previewImage.id = 'preview-image'
    previewImage.className = 'preview-image'
    previewImage.src = './img/upload-icon.svg'

    uploadButton.className = 'button'
    uploadButton.type = 'button'
    uploadButton.id = 'upload-button'
    uploadButton.textContent = 'Salvar'

    deleteButton.className = 'button'
    deleteButton.type = 'button'
    deleteButton.textContent = 'Cancelar'

    buttonContainer.replaceChildren(uploadButton, deleteButton)

    previewContainer.replaceChildren(previewInput, previewLabel, previewImage)

    form.replaceChildren(previewContainer, buttonContainer)
    return form
}