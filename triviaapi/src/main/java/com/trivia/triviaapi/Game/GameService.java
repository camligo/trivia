package com.trivia.triviaapi.Game;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
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

    return this.repo.save(foundGame);
  }
}
