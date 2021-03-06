'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('pages.home', {
  title: 'Kiddeepass'
})

Route.on('/home').render('pages.home', {
  title : 'Kiddeepass'
})
Route.on('/activities').render('pages.activities',{
  title : 'Activities'
})