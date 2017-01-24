import Ember from 'ember';

export default Ember.Service.extend({
	api_key: "a1dd28c37762178ce963c993546db25f",
	search_url: "https://api.flickr.com/services/rest/",
	getNewPhotos(searchText){
			let queryParams= {
				api_key:this.get('api_key'),
				text: searchText,
				method: "flickr.photos.search",
				format: "json",
				nojsoncallback: 1,
			};

			return Ember.$.ajax({
				url:this.get('search_url'),
				data:queryParams
			});


	}
});
