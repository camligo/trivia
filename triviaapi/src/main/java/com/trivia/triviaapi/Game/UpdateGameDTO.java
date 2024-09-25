package com.trivia.triviaapi.Game;


public class UpdateGameDTO {
  private Integer score;

  public Integer getScore() {
    return score;
  }

  public void setScore(Integer score) {
    this.score = score;
  }

  @Override
  public String toString() {
    return "UpdateGameDTO [score=" + score + "]";
  }

}
