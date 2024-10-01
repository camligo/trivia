package com.trivia.triviaapi.Game;

public class UpdateGameDTO {
  private Integer score;

  private String answers;

  private String selectedAnswers;

  public Integer getScore() {
    return score;
  }

  public String getAnswers() {
    return answers;
  }

  public String getSelectedAnswers() {
    return selectedAnswers;
  }

  public void setSelectedAnswers(String selectedAnswers) {
    this.selectedAnswers = selectedAnswers;
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
