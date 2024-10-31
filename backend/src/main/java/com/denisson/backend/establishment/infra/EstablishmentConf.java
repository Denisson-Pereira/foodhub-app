package com.denisson.backend.establishment.infra;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.establishment.entity.Establishment;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetByIdEstablishmentUseCase;

@Configuration
public class EstablishmentConf {
    
    @Bean
    public GetAllEstablishmentUseCase getAllEstablishmentUseCase(AbstractRepository<Establishment> establishmentRepository) {
        return new GetAllEstablishmentUseCase(establishmentRepository);
    }

    @Bean
    public GetByIdEstablishmentUseCase getByIdEstablishmentUseCase(AbstractRepository<Establishment> establishmenRepository) {
        return new GetByIdEstablishmentUseCase(establishmenRepository);
    }
}
