class Election {
  constructor (totalVoters, validVotes, blankVotes, nullVotes) {
    this.totalVoters = totalVoters;
    this.validVotes = validVotes;
    this.blankVotes = blankVotes;
    this.nullVotes = nullVotes;
  }

  /**
   * @description calculates the percentage of valid votes
   * @returns number
   */
  percentageValidVotes() {
    return (this.validVotes / this.totalVoters) * 100;
  } 

  /**
   * @description calculates the percentage of white votes
   * @returns number
   */
  percentageWhiteVotes() {
    return (this.blankVotes / this.totalVoters) * 100;
  } 

  /**
   * @description calculates the percentage of null votes
   * @returns number
   */
  percentageNullVotes() {
    return (this.nullVotes / this.totalVoters) * 100;
  } 
}

export default Election;