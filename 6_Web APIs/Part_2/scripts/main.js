document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('container');
    const textNode = document.createTextNode('Hello World');
    element.appendChild(textNode);
    const childElement = document.createElement('div');
    childElement.textContent = 'Goodbye World';
    element.appendChild(childElement);
});