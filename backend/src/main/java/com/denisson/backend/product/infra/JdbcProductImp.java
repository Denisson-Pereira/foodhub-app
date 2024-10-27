package com.denisson.backend.product.infra;

import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.product.entity.Product;

@Repository
public class JdbcProductImp implements AbstractRepository<Product> {

    private final JdbcTemplate jdbcTemplate;

    public JdbcProductImp(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Product> rowMapper = (rs, rowNum) -> new Product(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("evaluation"),
        rs.getString("description"),
        rs.getString("price"),
        rs.getString("category"),
        rs.getString("establishment"),
        rs.getString("image")
    );

    @Override
    public Product save(Product product) {
        if (product.getId() != null && existsById(product.getId())) {
            String sql = "UPDATE product SET name = ?, evaluation = ?, description = ?, price = ?, category = ?, establishment = ?, image = ? WHERE id = ?";
            jdbcTemplate.update(sql, product.getName(), product.getEvaluation(), product.getDescription(), product.getPrice(), product.getCategory(), product.getEstablishment(), product.getImage(), product.getId());
        } else {
            String sql = "INSERT INTO product (name, evaluation, description, price, category, establishment, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, product.getName(), product.getEvaluation(), product.getDescription(), product.getPrice(), product.getCategory(), product.getEstablishment(), product.getImage());
        }
        return product;
    }
    

    @Override
    public List<Product> getAll() {
        String sql = "SELECT * FROM product";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Optional<Product> getById(Long id) {
        String sql = "SELECT * FROM product WHERE id = ?";
        return jdbcTemplate.query(sql, rowMapper, id).stream().findFirst();
    }

    @Override
    public void deleteById(Long id) {
        String sql = "DELETE FROM product WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public boolean existsById(Long id) {
        String sql = "SELECT COUNT(*) FROM product WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
    }

    @Override
    public boolean existsName(String name) {
        String sql = "SELECT COUNT(*) FROM product WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }

    @Override
    public Optional<Product> findByName(String name) {
        String sql = "SELECT * FROM product WHERE name = ?";
        return jdbcTemplate.query(sql, rowMapper, name).stream().findFirst();
    }
}
