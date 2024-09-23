package com.trivia.triviaapi.Question;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.trivia.triviaapi.Game.Game;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String questionString;

    @Column
    private Boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "game_id")
    @JsonIgnoreProperties("questions")
    private Game game;

    public Long getId() {
        return id;
    }

    public String getQuestionString() {
        return questionString;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public Game getGame() {
        return game;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuestionString(String questionString) {
        this.questionString = questionString;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
