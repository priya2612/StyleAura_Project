package com.styleaura.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.styleaura.dto.LoginRequest;
import com.styleaura.dto.LoginResponse;
import com.styleaura.entity.User;
import com.styleaura.exception.ResourceNotFoundException;
import com.styleaura.repository.UserRepository;
import com.styleaura.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new ResourceNotFoundException("Invalid email or password");
        }

        // JWT will be added in next step
        return new LoginResponse(
                "",
                user.getName(),
                user.getEmail(),
                user.getRole().name()
        );
    }
}