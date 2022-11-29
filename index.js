// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(names,matchName){

   return names.filter(name => name.toLowerCase() === matchName.toLowerCase())
   }
findMatching(drivers, "sinon");


function fuzzyMatch(names, match){
 return names.filter((name) => name.charAt(0) === match.charAt(0))
   
}
fuzzyMatch(drivers, "Sa");
const drivers = [
   {
     name: 'Bobby',
     hometown: 'Pittsburgh' },
   {
     name: 'Sammy',
     hometown: 'New York' } ,
   {
     name: 'Sally',
     hometown: 'Cleveland' },
   {
     name: 'Annette',
     hometown: 'Los Angeles' },
   {
     name: 'Bobby',
     hometown: 'Tampa Bay' }
 ];
function matchName(names,fName){
   return names.filter((name)=> name.name === fName);
   
}
matchName(drivers, "Bobby")