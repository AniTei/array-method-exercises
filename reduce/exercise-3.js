/*
Exercise 3: Turn an array of values into a set of object keys

Store a team's score in an object, using the team's name as the key. Only
store the score if they were a winner ('isWinner').

An array of teams ('teams') has been provided for it. Each item is an object
with the the team's name ('name'), the team's score ('score') and if they
were a winner ('isWinner')

Tip: Set the initial value as an empty object {}

Tip: Use square brackets to set the teams name

Tip: Use 'toLowerCase()' when setting the team's key

*/

const teams = [
  {
    name: 'Hawks',
    score: 60,
    isWinner: true,
  },
  {
    name: 'Dolphins',
    score: 50,
    isWinner: true,
  },
  {
    name: 'Falcons',
    score: 90,
    isWinner: false,
  },
  {
    name: 'Bears',
    score: 90,
    isWinner: false,
  },
];


/* const winningTeamsExtended = teams.reduce((currentTeams, team) => {
  if (team.isWinner) {
      currentTeams[team.name.toLowerCase()] = team.score;
  }

*/

const winningTeams = teams.reduce((teamsSoFar, {name, score, isWinner}) => {

  if (isWinner) {
    teamsSoFar[name.toLowerCase()] = score;
  }

  return teamsSoFar

}, {},); 

// Replace null and add .reduce code here

//hmmm this was hard, couldn't figure it out, 
// I understand that I am trying to make a new object, w two keys, each w the value of the teams score
// but we only want to work w the ones that are winners, so we need an if, loop through to find, if true make key
// So w start by making one property, we need the name to become a key therefore lowercase,
// but how

// this was really hard, how was I to know how to set a key and its value?
// well now i've done it one time at least

console.log(winningTeams);
