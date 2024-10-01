package com.trivia.triviaapi.Game;

import java.util.Date;
import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

  // need to implement
  @Column
  @Temporal(TemporalType.TIMESTAMP)
  private Date playedAt;

  @Column
  private String difficulty;

  @Column
  private Integer category;

  @Column
  private ArrayList<String> questions;

  @Column
  private ArrayList<Integer> selectedAnswers;

  @Column
  private ArrayList<Integer> correctAnswers;

  @Column
  private ArrayList<ArrayList<String>> answers;

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

  @Override
  public String toString() {
    return "[category=" + category + ", difficulty=" + difficulty + ", score" + score + "]";
  }
}
