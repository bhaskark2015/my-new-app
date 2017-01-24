import Ember from 'ember';

export default Ember.Service.extend({
	photos:Ember.A(),
	addPhoto(url){
		this.get('photos').push(url);
	}
});
