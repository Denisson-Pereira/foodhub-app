package com.denisson.backend.establishment.drivers;

import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EstablishmentConf {
    @Bean
    public GetAllEstablishmentUseCase getAllEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        return new GetAllEstablishmentUseCase(establishmentRepository);
    }
}
