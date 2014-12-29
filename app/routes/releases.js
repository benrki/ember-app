import Ember from 'ember';
require('ic-ajax').default({ 
	url: 'https://api.github.com/repos/stefanpenner/ember-cli/releases', 
	type: 'get' 
})
.then(function(response) { 
	console.log("response:", response); 
});

export default Ember.Route.extend({
	model: function(params) {
		return ic.$.ajax({
			url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases',
			type: 'GET',
		});
	}
});
