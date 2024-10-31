package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetAllAbstractUseCase;
import com.denisson.backend.establishment.entity.Establishment;

public class GetAllEstablishmentUseCase extends GetAllAbstractUseCase<Establishment>{
    
    public GetAllEstablishmentUseCase(AbstractRepository<Establishment> repository) {
        super(repository);
    }
    
}
