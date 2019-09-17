import flats from '../../data/flats';

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  };
}
