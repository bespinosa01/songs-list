import{ combineReducers } from 'redux';

const songsReducer=()=>{
	return [
	{title:'No scrub', duration:'4:05'},
	{title:'Testing', duration:'3:05'},
	{title:'Love Sosa', duration:'2:05'},
	{title:'Robbery', duration:'4:05'}
	];
};

const selectedSongReducer = (selectedSong=null, action)=>{
	if(action.type==='SONG_SELECTED'){
		return action.payload;

	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,

});