package com.example.Prueba_AV;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // CORS para los endpoints que comienzan con /API/
        registry.addMapping("/API/**")
                .allowedOrigins("http://127.0.0.1:5500") // Origen de tu aplicación
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
};
