function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'contato'

    const ul = document.createElement('ul')

    const nameList= document.createElement('li')
    nameList.innerText = 'Nome'
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameList.appendChild(nameInput)
    ul.appendChild(nameList)
    ul.appendChild(document.createElement('br'))

    const phoneList= document.createElement('li')
    phoneList.innerText = 'Telefone'
    const phoneInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'phone'
    phoneList.appendChild(phoneInput)
    ul.appendChild(phoneList)
    ul.appendChild(document.createElement('br'))

    const addressli= document.createElement('li')
    addressli.innerHTML = '<label for="address">Endereço </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressli.appendChild(addressInput)
    ul.appendChild(addressli)
    ul.appendChild(document.createElement('br'))


    contactSection.append(h3, ul)

}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contact = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contact[contact.length - 1])

}