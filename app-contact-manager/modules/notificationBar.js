// grab from dom
const notificationBar = document.querySelector('.notification-bar');
notificationBar.style.position = 'relative';

// addMessage
export const addMessage = (messageElement) => {
  // clearMessages
  clearMessages();
  setTimeout(clearMessages, 10000);

  notificationBar.append(messageElement, closeButton);
};

// clearMessages
export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.style.position = 'absolute';
closeButton.style.right = '8px';
closeButton.style.top = '4px';
closeButton.style.border = 'none';
closeButton.style.background = 'transparent';
closeButton.style.color = 'black';
closeButton.style.fontSize = '14px';
closeButton.style.padding = '0';
closeButton.style.width = '16px';
closeButton.style.aspectRatio = '1';
closeButton.innerText = 'x';
closeButton.addEventListener('click', clearMessages);

// export default DOM object
export default notificationBar;
