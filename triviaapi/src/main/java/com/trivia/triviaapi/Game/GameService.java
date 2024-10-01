package com.trivia.triviaapi.Game;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class GameService {

  @Autowired
  private GameRepository repo;

  public Game createGame(CreateGameDTO data) {
    Game newGame = new Game();
    Integer category = data.getCategory();
    String difficulty = data.getDifficulty();
    String questions = data.getQuestions();

    newGame.setCategory(category);
    newGame.setDifficulty(difficulty);
    newGame.setQuestions(questions);

    this.repo.save(newGame);

    return newGame;
  }

  public Optional<Game> getGameById(Long id) {
    return this.repo.findById(id);
  }

  public Game updateGame(UpdateGameDTO data, @PathVariable Long id) {
    Optional<Game> game = this.getGameById(id);
    Game foundGame = game.get();

    if (data.getScore() != null) {
      foundGame.setScore(data.getScore());
    }

    String newAnswersString;
    if (data.getAnswers() != null) {
      newAnswersString = data.getAnswers();
    } else {
      newAnswersString = "";
    }

    String existingAnswersString;
    if (foundGame.getAnswers() != null) {
      existingAnswersString = foundGame.getAnswers();
    } else {
      existingAnswersString = "";
    }

    foundGame.setAnswers(existingAnswersString + newAnswersString);

    String newSelectedAnswersString;
    if (data.getSelectedAnswers() != null) {
      newSelectedAnswersString = data.getSelectedAnswers();
    } else {
      newSelectedAnswersString = "";
    }

    String existingSelectedAnswersString;
    if (foundGame.getSelectedAnswers() != null) {
      existingSelectedAnswersString = foundGame.getSelectedAnswers();
    } else {
      existingSelectedAnswersString = "";
    }

    foundGame.setSelectedAnswers(existingSelectedAnswersString + newSelectedAnswersString);

    String newCorrectAnswersString;
    if (data.getCorrectAnswers() != null) {
      newCorrectAnswersString = data.getCorrectAnswers();
    } else {
      newCorrectAnswersString = "";
    }

    String existingCorrectAnswersString;
    if (foundGame.getCorrectAnswers() != null) {
      existingCorrectAnswersString = foundGame.getCorrectAnswers();
    } else {
      existingCorrectAnswersString = "";
    }

    foundGame.setCorrectAnswers(existingCorrectAnswersString + newCorrectAnswersString);

    return this.repo.save(foundGame);
  }
}
