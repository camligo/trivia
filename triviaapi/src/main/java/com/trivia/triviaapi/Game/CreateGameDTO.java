package com.trivia.triviaapi.Game;

import java.util.ArrayList;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateGameDTO {

    @NotNull
    private Integer category;

    @NotBlank
    private String difficulty;

    private ArrayList<String> questions;

    public Integer getCategory() {
        return category;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public ArrayList<String> getQuestions() {
        return questions;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public void setQuestions(ArrayList<String> questions) {
        this.questions = questions;
    }

    @Override
    public String toString() {
        return "CreateGameDTO [category=" + category + ", difficulty= " + difficulty + "]";
    }
}
