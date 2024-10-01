package com.trivia.triviaapi.Game;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
  public ResponseEntity<Game> createGame(@RequestBody CreateGameDTO data) {

    Game newGame = this.gameService.createGame(data);
    return new ResponseEntity<Game>(newGame, HttpStatus.CREATED);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Game> getGameById(@PathVariable Long id) throws Exception {
    Optional<Game> result = this.gameService.getGameById(id);

    Game foundGame = result.orElseThrow(() -> new Exception("Couldn't find game with id " + id));

    return new ResponseEntity<Game>(foundGame, HttpStatus.OK);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<Game> updateGame(@RequestBody UpdateGameDTO data, @PathVariable Long id) {
    Game updatedGame = this.gameService.updateGame(data, id);

    return new ResponseEntity<Game>(updatedGame, HttpStatus.OK);
  }
}
