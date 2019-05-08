'use strict'

const Model = use('Model')

class Schedule extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
  patient () {
    return this.belongsTo('App/Models/User', 'patient_id', 'id')
  }
  clerk () {
    return this.belongsTo('App/Models/User', 'clerk_id', 'id')
  }
}

module.exports = Schedule
