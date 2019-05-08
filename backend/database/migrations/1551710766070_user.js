'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name').notNullable()
      table.date('birth_day')
      table.string('tab_number')
      table.string('plan_number')
      table.string('rg')
      table.string('cpf')
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('password').notNullable()
      table.enu('gender', ['male', 'female', 'others']).notNullable()
      table.enu('type', ['patient', 'professional']).notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
