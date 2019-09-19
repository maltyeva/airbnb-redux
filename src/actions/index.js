import flats from '../../data/flats';

export function setFlats() {
  // return {
  //   type: "SET_FLATS",
  //   payload: flats
  // };
  	const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json());
   
      return {
        type: "SET_FLATS", 
        payload: promise
      };
}


export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT", 
    payload: flat
  }
}