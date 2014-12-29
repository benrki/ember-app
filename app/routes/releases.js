import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function(params) {
		return ajax({
			url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases',
			type: 'GET'
		});
	}
});
