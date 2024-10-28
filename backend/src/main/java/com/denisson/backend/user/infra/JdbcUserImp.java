package com.denisson.backend.user.infra;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.denisson.backend.user.adapter.gateway.UserRepository;
import com.denisson.backend.user.entity.User;

@Repository
public class JdbcUserImp implements UserRepository<User>{

    private final JdbcTemplate jdbcTemplate;

    public JdbcUserImp(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<User> rowMapper = (rs, rowNum) -> new User(
        rs.getLong("id"),
        rs.getString("name"),
        rs.getString("login"),
        rs.getString("password")
    );

    @Override
    public User save(User user) {
        if (user.getId() != null && existsById(user.getId())) {
            String sql = "UPDATE user SET name = ?, login = ?, password = ?";
            jdbcTemplate.update(sql, user.getName(), user.getLogin(), user.getPassword());
        } else {
            String sql = "INSERT INTO user (name, login, password) VALUES (?, ?, ?)";
            jdbcTemplate.update(sql, user.getName(), user.getLogin(), user.getPassword());
        }
        return user;
    }

    @Override
    public boolean existsById(Long id) {
        String sql = "SELECT COUNT(*) FROM user WHERE id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count >0;
    }

    @Override
    public boolean existsLogin(String login) {
        String sql = "SELECT COUNT(*) FROM user WHERE login = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, login);
        return count != null && count >0;
    }

    @Override
    public Optional<User> findByLogin(String login) {
        String sql = "SELECT * FROM user WHERE login = ?";
        return jdbcTemplate.query(sql, rowMapper, login).stream().findFirst();
    }
    
}
