const cats = [
    {
        src: 'cat-1.jpg',
        name: 'Usual'
    },
    {
        src: 'cat-2.jpg',
        name: 'Blue eye'
    },
    {
        src: 'cat-3.jpg',
        name: 'twin'
    },
    {
        src: 'cat-4.jpg',
        name: 'Gang'
    },
    {
        src: 'cat-5.jpg',
        name: 'Tub'
    }
]


const container = document.querySelector('.container')
for (const cat in cats) {
    let counter = 0
    const catElement = document.createElement('div')
    catElement.className = 'cat-container'
    catElement.innerHTML = 
    `<h4 class="cat-name">${cats[cat].name}</h4>
    <p><span id="${cat}">${counter}</span> clicks</p>
    <img class='cat-img' src="${cats[cat].src}" />`

    container.appendChild(catElement)
    
    catElement.addEventListener('click', ((counter, id) => {
        return () => {
            document.getElementById(id).innerHTML = ++counter
        }
    })(counter, cat))

    
}
