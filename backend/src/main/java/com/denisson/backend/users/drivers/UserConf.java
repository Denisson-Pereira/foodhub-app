package com.denisson.backend.users.drivers;

import com.denisson.backend.users.adapters.repository.UserRepository;
import com.denisson.backend.users.useCases.LoginUserCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConf {

    @Bean
    public LoginUserCase loginUserCase(UserRepository userRepository) {
        return new LoginUserCase(userRepository);
    }

}
