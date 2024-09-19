package com.trivia.triviaapi.Game;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="games")
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
  private String category;

  @Column
  private Integer correctAnswersCount;
}
