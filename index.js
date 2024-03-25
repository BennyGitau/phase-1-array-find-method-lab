// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]
// function declaration
function superbowlWin(record){
//using find to test the required condition
    let foundYear = record.find(element => element.result === 'W');
    console.log(foundYear);
//the return in the element is not found.
    if(!foundYear) {
        return undefined
//the return if the element is found
    } else {
        return foundYear.year
    };
}
