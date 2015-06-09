GlobalController = RouteController.extend({
  layoutTemplate: 'globalLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', function (){ 
  this.render('home');
}, {
  name: 'home',
  controller: 'GlobalController'
});