package com.denisson.backend.establishment.infra;

import java.util.List;
import java.util.Optional;


import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.establishment.entity.Establishment;

@Repository
public class JdbcEstablishment implements AbstractRepository<Establishment>{

    private final JdbcTemplate jdbcTemplate;

    public JdbcEstablishment(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Establishment> rowMapper = (rs, rowNum) -> new Establishment(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("evaluation"),
        rs.getString("description"),
        rs.getString("price"),
        rs.getString("time"),
        rs.getString("tag_1"),
        rs.getString("tag_2"),
        rs.getString("tag_3"),
        rs.getString("cover")
    );

    @Override
    public Establishment save(Establishment value) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public List<Establishment> getAll() {
        String sql = "SELECT * FROM establishment";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Optional<Establishment> getById(Long id) {
        String sql = "SELECT * FROM establishment WHERE id = ?";
        return jdbcTemplate.query(sql, rowMapper, id).stream().findFirst();
    }

    @Override
    public void deleteById(Long id) {
        String sql = "DELETE FROM establishment WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public boolean existsById(Long id) {
        String sql = "SELECT COUNT(*) FROM establishment WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }

    @Override
    public boolean existsName(String name) {
        String sql = "SELECT COUNT(*) FROM establishment WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }

    @Override
    public Optional<Establishment> findByName(String name) {
        String sql = "SELECT * FROM establishment WHERE name = ?";
        return jdbcTemplate.query(sql, rowMapper, name).stream().findFirst();
    }
    
}
