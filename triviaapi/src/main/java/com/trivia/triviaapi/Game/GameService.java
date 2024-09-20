package com.trivia.triviaapi.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GameService {

  @Autowired
  private GameRepository repo;

  private final RestTemplate restTemplate;

  public GameService(RestTemplate restTemplate) {
    this.restTemplate = restTemplate;
  }

  public String createGame(CreateGameDTO data) {
    Game newGame = new Game();
    Integer category = data.getCategory();
    String difficulty = data.getDifficulty();
    newGame.setCategory(category);
    newGame.setDifficulty(difficulty);

    return this.repo.save(newGame).toString();
  }

}
