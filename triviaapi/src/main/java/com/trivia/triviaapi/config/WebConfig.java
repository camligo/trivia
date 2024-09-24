package com.trivia.triviaapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Value("${ALLOWED_ORIGINS}")
    private String allowedOrigins;

    public void addCorsMappings(CorsRegistry registry) {
        String[] allowedOriginsArr = allowedOrigins.split(",");

        registry.addMapping("/**")
                .allowedOrigins(allowedOriginsArr)
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
