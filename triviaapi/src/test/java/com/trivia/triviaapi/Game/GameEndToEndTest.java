package com.trivia.triviaapi.Game;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class GameEndToEndTest {

  @LocalServerPort
  private int port;

  @Autowired
  private GameRepository gameRepository;

  private Game game1;

  @BeforeEach
  public void setUp() {
    RestAssured.port = port;

    game1 = new Game();
    game1.setCategory(12);
    game1.setDifficulty("hard");
    Game savedGame = gameRepository.save(game1);

    game1.setId(savedGame.getId());
  }

  @Test
  public void getGameById() {
    given()
      .pathParam("id", game1.getId())
      .when()
      .get("/games/{id}")
      .then()
      .statusCode(HttpStatus.OK.value())
      .body("category", equalTo(12))
      .body("difficulty", equalTo("hard"));
  }

  @Test
  public void createGame_success() {
    CreateGameDTO data = new CreateGameDTO();
    data.setCategory(9);
    data.setDifficulty("easy");
    given()
      .contentType(ContentType.JSON)
      .body(data)
      .when()
      .post("/games")
      .then()
      .statusCode(HttpStatus.CREATED.value())
      .body("category", equalTo(9))
      .body("difficulty", equalTo("easy"));
  }

}
