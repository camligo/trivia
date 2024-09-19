package com.trivia.triviaapi.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("games")
public class GameController {
  @Autowired
  private GameService gameService;

  @PostMapping
  public String createGame() {
    return this.gameService.createGame();
  }
}