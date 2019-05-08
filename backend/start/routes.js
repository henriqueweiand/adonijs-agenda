'use strict'

const Route = use('Route')

/**
 * Public Routes
 */
Route.get('/', () => {
  return { greeting: 'Welcome to agenda!' }
})

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store').validator('Session/Store')
Route.post('forgot-password', 'ForgotPasswordController.store').validator('ForgotPassword/Store')
Route.put('forgot-password', 'ForgotPasswordController.update').validator('ForgotPassword/Update')

/**
 * Private Routes (Authenticated)
 */
Route.group(() => {
  Route.resource('users', 'UserController').apiOnly()
  Route.resource('financials', 'FinancialController').apiOnly()
  Route.resource('schedules', 'ScheduleController').apiOnly()
  Route.resource('medicalrecords', 'MedicalRecordController').apiOnly()
  Route.resource('permissions', 'PermissionController').apiOnly()
  Route.resource('roles', 'RoleController').apiOnly()
  Route.resource('addresses', 'AddressController').apiOnly()
  Route.resource('phones', 'PhoneController').apiOnly()
  Route.resource('files', 'FileController').apiOnly()
}).middleware('auth')
