'use strict'

const Schema = use('Schema')

class AdoptionSchema extends Schema {
  up () {
    this.create('schedules', table => {
      table.increments()
      table
        .integer('patient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('clerk_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('color').notNullable()
      table.string('title')
      table.datetime('start').notNullable()
      table.datetime('end').notNullable()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = AdoptionSchema
