import Ember from 'ember';

export default Ember.Route.extend({
	photoSearch: Ember.inject.service('photo-search'),
	favouritePhotos: Ember.inject.service('favourite-photos'),
	searchText:'',
	photoUrls:Ember.A(),
	photos:null,
	init(){
		this._super(...arguments)
	},
	actions:{
	loadnewresults(){
		this.get('photoSearch').getNewPhotos(this.get('searchText')).then((response)=>{
			this.set('photos',response.photos);
		});
	},
	updateSearchText(searchText){
		this.set('searchText',searchText);
	},
	addToFavourite(index){
		this.get('favouritePhotos').addPhoto(this.get('controller.photoUrls').objectAt(index));
	}
},

	newPhotosRecieved: Ember.observer('photos',function(){
		let photoUrls=[];
		this.get('photos') && this.get('photos.photo').forEach((item)=>{
			let url= "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_s.jpg";
			photoUrls.push(url);
		});

		this.get('controller').set('photoUrls',photoUrls) ;
	}),



});
