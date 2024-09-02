package com.denisson.backend.establishment.drivers;

import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.useCases.CreateEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetEstablishmentByIdUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EstablishmentConf {
    @Bean
    public CreateEstablishmentUseCase createEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        return new CreateEstablishmentUseCase(establishmentRepository);
    }
    @Bean
    public GetAllEstablishmentUseCase getAllEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        return new GetAllEstablishmentUseCase(establishmentRepository);
    }
    @Bean
    public GetEstablishmentByIdUseCase getEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        return new GetEstablishmentByIdUseCase(establishmentRepository);
    }
}
