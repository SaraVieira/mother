'use strict'
const osmosis = require('osmosis')
const jsonfile = require('jsonfile')
const reviews = []
const formatting = { spaces: 2, EOL: '\n' }

const getReviews = url =>
  osmosis
    .get(`https://m.imdb.com/title/tt5109784/reviews/_ajax${url || ''}`)
    .find('.review-container')
    .set({
      title: '.title',
      content: '.content .text',
      rating: '.rating-other-user-rating span'
    })
    .data(review => {
      reviews.push(review)
    })
    .error(error => error)

module.exports = () =>
  getReviews().done(() =>
    getReviews(
      '?ref_=undefined&paginationKey=bcm33mt5uiu5cpooddsbuj3dzfwtvkzyurdlvzgkxrws5s7kgzfgnazue64cgvkpskrxif24czsme'
    ).done(() =>
      getReviews(
        '?ref_=undefined&paginationKey=ti7cdvcnjl7faccc2zyp2iyigpukjx3obxmfpcv35ggrzwl3brgr4uwj6zlr5vubd22a7sf6ysab6'
      ).done(() =>
        getReviews(
          '?ref_=undefined&paginationKey=vli4d766pcms6n66jllx7pmz4nyuzu5e2oml4yahm7sig2x7ox4p7iwznwsszaxu346ov2e3452t4'
        ).done(() =>
          getReviews(
            '?ref_=undefined&paginationKey=gulf3tngeswvxxqrnz5mwx7pdihmj2phrsgjgxefvj5uumw2na43mttlwuimkzalvrqfylkhamgi2'
          ).done(() =>
            getReviews(
              '?ref_=undefined&paginationKey=xk6lj36ipwkdomc4oad2p3h7vhlqviluvdovszo27ah7dqt7nbz635naae4ka4krhhjcx4oon4cak'
            ).done(() => jsonfile.writeFile('reviews.json', reviews, formatting, err => {
              console.error(err)
            }))
          )
        )
      )
    )
  )
