package com.trivia.triviaapi.Game;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateGameDTO {

    @NotNull
    private Integer category;

    @NotBlank
    private String difficulty;

    public Integer getCategory() {
        return category;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    @Override
    public String toString() {
        return "CreateGameDTO [category=" + category + ", difficulty= " +
                difficulty + "]";
    }
}
