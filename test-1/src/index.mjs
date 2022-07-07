import Election from './Election.mjs';
// const Election = require('./Election');

const election = new Election(1000, 800, 150, 50);

const percentageValidVotes = election.percentageValidVotes();
const percentageWhiteVotes = election.percentageWhiteVotes();
const percentageNullVotes = election.percentageNullVotes();

console.log(`Percentual de votos válidos: ${percentageValidVotes}%`);
console.log(`Percentual de votos brancos: ${percentageWhiteVotes}%`);
console.log(`Percentual de votos nulos: ${percentageNullVotes}%`);
