'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MedicalRecordsSchema extends Schema {
  up () {
    this.create('medical_records', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.datetime('date').notNullable()
      table.text('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('medical_records')
  }
}

module.exports = MedicalRecordsSchema
