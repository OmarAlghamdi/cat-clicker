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


const container = document.querySelector('.cats-container')
const menu = document.querySelector('.menu')

for (const cat in cats) {
    let counter = 0
    const catImg = document.createElement('div')
    catImg.innerHTML =
        `<h4 class="cat-name">${cats[cat].name}</h4>`

    menu.appendChild(catImg)

    catImg.addEventListener('click', ((id, counter) => {
        return () => {
            oldCat = document.querySelector('.cat')
            const newCat = document.createElement('div')
            newCat.className = 'cat'
            newCat.innerHTML =
                `<h4 class="cat-name">${cats[id].name}</h4>
                <p><span id="${id}">${counter}</span> clicks</p>
                <img class='cat-img' src="${cats[id].src}" />`
            container.replaceChild(newCat, oldCat)

            newCat.addEventListener('click', ((counter, id) => {
                return () => {
                    document.getElementById(id).innerHTML = ++counter
                }
            })(counter, id))
        }

    })(cat, counter))
    
    // catImg.addEventListener('click', ((counter, id) => {
    //     return () => {
    //         document.getElementById(id).innerHTML = ++counter
    //     }
    // })(counter, cat))
}

// for (const cat in cats) {
//     catImg = document.querySelector('.cat-img')
//     let counter = 0
//     catImg.addEventListener('click', ((counter, id) => {
//         document.getElementById(id).innerHTML = ++counter
//     })(counter, cat))
// }

