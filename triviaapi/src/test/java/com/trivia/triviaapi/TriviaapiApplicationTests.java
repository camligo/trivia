package com.trivia.triviaapi;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class TriviaapiApplicationTests {

	@Test
	void contextLoads() {
	}

  @Test
  void simpleTest() {
    int a = 1;
    int b = 1;
    assertThat(a).isEqualTo(b);
  }

}
