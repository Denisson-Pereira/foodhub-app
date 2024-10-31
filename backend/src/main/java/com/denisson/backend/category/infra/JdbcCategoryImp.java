package com.denisson.backend.category.infra;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.category.entity.Category;

@Repository
public class JdbcCategoryImp implements AbstractRepository<Category>{

    private final JdbcTemplate jdbcTemplate;

    public JdbcCategoryImp(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Category> rowMapper = (rs, rowNum) -> new Category(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("image") 
    );

    @Override
    public Category save(Category value) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public List<Category> getAll() {
        String sql = "SELECT * FROM category";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Optional<Category> getById(Long id) {
        String sql = "SELECT * FROM category WHERE id = ?";
        return jdbcTemplate.query(sql, rowMapper, id).stream().findFirst();
    }

    @Override
    public void deleteById(Long id) {
        String sql = "DELETE FROM category WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public boolean existsById(Long id) {
        String sql = "SELECT COUNT(*) FROM category WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }

    @Override
    public boolean existsName(String name) {
        String sql = "SELECT COUNT(*) FROM category WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }

    @Override
    public Optional<Category> findByName(String name) {
        String sql = "SELECT * FROM category WHERE name = ?";
        return jdbcTemplate.query(sql, rowMapper, name).stream().findFirst();
    }

    
    
}
