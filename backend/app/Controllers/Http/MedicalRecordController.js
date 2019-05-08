'use strict'

const MedicalRecords = use('App/Models/MedicalRecords')

class MedicalRecordsController {
  async index () {
    const medicalRecords = await MedicalRecords.query()
      .with('user')
      .fetch()

    return medicalRecords
  }

  async store ({ request, params, auth }) {
    const data = request.only(['date', 'description'])

    const user = auth.user.id

    const medicalRecords = await MedicalRecords.create({ user_id: user, ...data })

    await medicalRecords.load('user')

    return medicalRecords
  }

  async show ({ params }) {
    const medicalRecords = await MedicalRecords.findOrFail(params.id)

    await medicalRecords.loadMany(['user'])

    return medicalRecords
  }

  async update ({ params, request }) {
    const data = request.only(['date', 'description'])

    const medicalRecords = await MedicalRecords.findOrFail(params.id)

    await medicalRecords.merge(data)

    await medicalRecords.save()

    await medicalRecords.load('user')

    return medicalRecords
  }

  async destroy ({ params }) {
    const medicalRecords = await MedicalRecords.findOrFail(params.id)

    await medicalRecords.delete()
  }
}

module.exports = MedicalRecordsController
