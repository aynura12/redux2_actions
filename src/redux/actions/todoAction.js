 export function sort(state) {
  const newArray = [...state];
  newArray.sort((a, b) => a - b);
  return {
    type: "SORT",
    payload: newArray
  };
}
 export function empty(){
     return {
        type :"EMPTY",
        payload:[]
    }
 }