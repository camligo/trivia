package com.trivia.triviaapi.Game;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.trivia.triviaapi.Question.Question;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "games")
public class Game {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private Integer score;

  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date playedAt;

  @Column
  private String difficulty;

  @Column
  private Integer category;

  @Column
  private Integer correctAnswersCount;

  @OneToMany(mappedBy = "game")
  @JsonIgnoreProperties("game")
  private List<Question> questions;

  public Long getId() {
    return id;
  }

  public Integer getScore() {
    return score;
  }

  public Date getPlayedAt() {
    return playedAt;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public Integer getCategory() {
    return category;
  }

  public Integer getCorrectAnswersCount() {
    return correctAnswersCount;
  }

  public List<Question> getQuestions() {
    return questions;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setScore(Integer score) {
    this.score = score;
  }

  public void setPlayedAt(Date playedAt) {
    this.playedAt = playedAt;
  }

  public void setDifficulty(String difficulty) {
    this.difficulty = difficulty;
  }

  public void setCategory(Integer category) {
    this.category = category;
  }

  public void setCorrectAnswersCount(Integer correctAnswersCount) {
    this.correctAnswersCount = correctAnswersCount;
  }

  public void setQuestions(List<Question> questions) {
    this.questions = questions;
  }

  @Override
  public String toString() {
    return "[category=" + category + ", difficulty=" + difficulty + "]";
  }
}
