const io = io('http://localhost:3000')
const messagecContainer = document.getElementById('send-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')


const name = prompt('Whats your name?')
appendMessage('You joined')
socket.emit('new user', name)

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})


socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
})



socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
})


messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = messageinput.value
    appendMessage(`You ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messagecContainer.append(messageElement)
}