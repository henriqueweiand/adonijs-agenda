'use strict'

const Schedule = use('App/Models/Schedule')

class ScheduleController {
  async index () {
    const schedule = await Schedule.query()
      .with('user')
      .with('patient')
      .with('clerk')
      .fetch()

    return schedule
  }

  async store ({ request, params, auth }) {
    const data = request.only([
      'patient_id',
      'clerk_id',
      'color',
      'title',
      'start',
      'end',
      'description'
    ])

    const user = auth.user.id

    const schedule = await Schedule.create({ user_id: user, ...data })

    await schedule.loadMany(['user', 'patient', 'clerk'])

    return schedule
  }

  async show ({ params }) {
    const schedule = await Schedule.findOrFail(params.id)

    await schedule.loadMany(['user', 'patient', 'clerk'])

    return schedule
  }

  async update ({ params, request }) {
    const data = request.only([
      'patient_id',
      'clerk_id',
      'color',
      'title',
      'start',
      'end',
      'description'
    ])

    const schedule = await Schedule.findOrFail(params.id)

    await schedule.merge(data)

    await schedule.save()

    await schedule.loadMany(['user', 'patient', 'clerk'])

    return schedule
  }

  async destroy ({ params }) {
    const schedule = await Schedule.findOrFail(params.id)

    await schedule.delete()
  }
}

module.exports = ScheduleController
