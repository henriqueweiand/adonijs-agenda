'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('financials', table => {
      table.increments()
      table.string('color').notNullable()
      table.date('data').notNullable()
      table.enu('type', ['input', 'output']).notNullable()
      table.string('value').notNullable()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('financials')
  }
}

module.exports = CategorySchema
