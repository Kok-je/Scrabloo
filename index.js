const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://techcrunch.com/'
const url2 = 'https://venturebeat.com/'
const url3 = 'https://www.digitaltrends.com/'
const url4 = 'https://news.ycombinator.com/'

// app.METHOD(PATH, HANDLER)
app.get('/', function (req, res) {
    res.json('This is my webscrapper')
})

app.get('/results', function (req, res) {
    axios(url)
        .then(
            response => {
                const html = response.data
                const $ = cheerio.load(html)
                const articles = []

                $('.post-block__title', html).each(function() {
                    const title = $(this).text()
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        url
                    })
                })

                $('.mini-view__item__title', html).each(function() {
                    const title = $(this).text()
                    const url = $(this).find('a').attr('href')
                    articles.push({
                        title,
                        url
                    })
                })
                // console.log(articles)
                res.json(articles)
            }
        ).catch(err => console.log(err))
}) 

app.get('/results2', (req, res) => {
    axios(url2)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.ArticleListing__title', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})

app.get('/results3', (req, res) => {
    axios(url3)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.b-mem-post__content', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })

            $('.b-river-post__content', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})

app.get('/results4', (req, res) => {
    axios(url4)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const articles = []

            $('.titleline', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('a').attr('href')
                articles.push({
                    title,
                    url
                })
            })

            res.json(articles)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))