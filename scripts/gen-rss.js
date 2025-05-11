const { promises: fs } = require('fs')
const RSS = require('rss')

async function generate() {
  const feed = new RSS({
    title: 'Kimoy Catayas',
    site_url: 'https://kimoycatayas.com',
    feed_url: 'https://kimoycatayas.com/feed.xml'
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
