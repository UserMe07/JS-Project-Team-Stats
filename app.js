const team = {
  _players: [
    {
  firstName: 'Lionel',
  lastName: 'Messi',
  age: 33
},
{
  firstName: 'Luis',
  lastName: 'Suarez',
  age: 33
},
{
  firstName: 'Gerard',
  lastName: 'Pique',
  age: 33
}
  ],
  _games: [
    {
  opponent: 'Atletico Madryt',
  teamPoints: 2,
  opponentPoints: 2
},
{
  opponent: 'Villarreal',
  teamPoints: 4,
  opponentPoints: 1
},
{
  opponent: 'Espanyol',
  teamPoints: 1,
  opponentPoints: 0
}
  ],
get players () {
  return this._players;
},
get games () {
  return this._games;
},

addPlayer (firstName, lastName, age){
  const player = {
    firstName,
    lastName,
    age
  };
  this._players.push(player);
},

addGame (opponent, teamPoints, opponentPoints) {
  const game = {
    opponent,
    teamPoints,
    opponentPoints
  };
  this._games.push(game);
}
};

team.addPlayer('Name1', 'Surname1', 20);
team.addPlayer('Name2', 'Surname2', 25);
team.addPlayer('Name3', 'Surname3', 30);
//console.log(team._players);

team.addGame('Opponent1', 1, 1);
team.addGame('Opponent2', 2, 2);
team.addGame('Opponent3', 3, 3);
console.log(team._games);