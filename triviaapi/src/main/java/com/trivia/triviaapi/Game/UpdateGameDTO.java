package com.trivia.triviaapi.Game;

public class UpdateGameDTO {
  private Integer score;

  private String answers;

  public Integer getScore() {
    return score;
  }

  public String getAnswers() {
    return answers;
  }

  public void setScore(Integer score) {
    this.score = score;
  }

  public void setAnswers(String answers) {
    this.answers = answers;
  }

  @Override
  public String toString() {
    return "UpdateGameDTO [score=" + score + "]";
  }
}
