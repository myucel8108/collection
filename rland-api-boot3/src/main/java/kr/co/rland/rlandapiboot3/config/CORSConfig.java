package kr.co.rland.rlandapiboot3.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConfig {
    

    @Bean
    WebMvcConfigurer webMvcConfigurer(){

            WebMvcConfigurer Configurer = new WebMvcConfigurer(){
                
                @Override
                public void addCorsMappings(CorsRegistry registry){

                    registry.addMapping("/**").allowedOrigins("*");
                }
            };

            return Configurer;
    }
}
