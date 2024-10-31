package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetByIdUseCase;
import com.denisson.backend.establishment.entity.Establishment;

public class GetByIdEstablishmentUseCase extends GetByIdUseCase<Establishment>{

    public GetByIdEstablishmentUseCase(AbstractRepository<Establishment> repository) {
        super(repository);
    }

    @Override
    protected String getNameEntity() {
        return "Establishment";
    }
    
}
