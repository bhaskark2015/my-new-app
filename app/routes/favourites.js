import Ember from 'ember';

export default Ember.Route.extend({
	favouritePhotosService: Ember.inject.service('favourite-photos'),
	model(){
		this._super(...arguments);
		return this.get('favouritePhotosService.photos');
	}

});
