package com.trivia.triviaapi.Game;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GameService {

  private final RestTemplate restTemplate;

  public GameService(RestTemplate restTemplate) {
      this.restTemplate = restTemplate;
  }

  public String createGame() {
    String url = "https://opentdb.com/api.php?amount=3&type=multiple";
    return restTemplate.getForObject(url, String.class);
  }

}
