package com.trivia.triviaapi.Game;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("games")
public class GameController {
  @Autowired
  private GameService gameService;

  @PostMapping
  public String createGame(@RequestBody CreateGameDTO data) {
    return this.gameService.createGame(data);
  }

  @GetMapping("/{id}")
  public Optional<Game> getGameById(@PathVariable Long id) {
      return this.gameService.getGameById(id);
  }

  @PatchMapping("/{id}")
  public String updateGame(@RequestBody UpdateGameDTO data, @PathVariable Long id) {
    return this.gameService.updateGame(data, id);
  }
}
