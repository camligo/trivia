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
    newGame.setCategory(data.getCategory());
    newGame.setDifficulty(data.getDifficulty());

    return this.repo.save(newGame).toString();
    // String url = "https://opentdb.com/api.php?amount=3&type=multiple";
    // return restTemplate.getForObject(url, String.class);
  }

}
