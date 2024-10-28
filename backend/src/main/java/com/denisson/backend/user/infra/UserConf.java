package com.denisson.backend.user.infra;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.backend.user.adapter.gateway.UserRepository;
import com.denisson.backend.user.entity.User;
import com.denisson.backend.user.useCases.LoginUseCase;

@Configuration
public class UserConf {
    @Bean
    public LoginUseCase LoginUseCase(UserRepository<User> userRepository) {
        return new LoginUseCase(userRepository);
    }
}
