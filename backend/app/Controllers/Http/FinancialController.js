'use strict'

const Financial = use('App/Models/Financial')

class FinancialController {
  async index () {
    const financial = await Financial.query().fetch()

    return financial
  }

  async store ({ request }) {
    const data = request.only([
      'color',
      'data',
      'type',
      'value',
      'description'
    ])

    const financial = await Financial.create(data)

    return financial
  }

  async show ({ params }) {
    const financial = await Financial.findOrFail(params.id)

    return financial
  }

  async update ({ params, request }) {
    const data = request.only([
      'color',
      'data',
      'type',
      'value',
      'description'
    ])

    const financial = await Financial.findOrFail(params.id)

    await financial.merge(data)

    await financial.save()

    return financial
  }

  async destroy ({ params }) {
    const financial = await Financial.findOrFail(params.id)

    await financial.delete()
  }
}

module.exports = FinancialController
