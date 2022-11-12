const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div class="news-card"><h3>` + `<a href="` + article.url + `" target="_blank" rel="noopener noreferrer">` + article.title + `</a></h3></div><br><br>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))

const feedDisplay2 = document.querySelector('#feed2')

fetch('http://localhost:8000/results2')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div class="news-card"><h3>` + `<a href="` + article.url + `" target="_blank" rel="noopener noreferrer">` + article.title + `</a></h3></div><br><br>`
            feedDisplay2.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))

const feedDisplay3 = document.querySelector('#feed3')

fetch('http://localhost:8000/results3')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div class="news-card"><h3>` + `<a href="` + article.url + `" target="_blank" rel="noopener noreferrer">` + article.title + `</a></h3></div><br><br>`
            feedDisplay3.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))

const feedDisplay4 = document.querySelector('#feed4')

fetch('http://localhost:8000/results4')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div class="news-card"><h3>` + `<a href="` + article.url + `" target="_blank" rel="noopener noreferrer">` + article.title + `</a></h3></div><br><br>`
            feedDisplay4.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))