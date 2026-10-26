package com.example.backend.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.example.backend.auth.AuthDtos.*;

@Service
public class AuthService {
    private final UserAccountRepository users;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final TokenService tokenService;

    public AuthService(UserAccountRepository users, TokenService tokenService) {
        this.users = users;
        this.tokenService = tokenService;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        String email = request.email().trim().toLowerCase();
        if (users.existsByEmailIgnoreCase(email)) {
            throw new AuthException("An account with this email already exists.");
        }
        UserAccount user = users.save(new UserAccount(
            request.fullName().trim(), email, passwordEncoder.encode(request.password())
        ));
        return new AuthResponse(tokenService.createToken(user), toResponse(user),
            "Account created successfully.");
    }

    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {
        String email = request.email().trim().toLowerCase();
        UserAccount user = users.findByEmailIgnoreCase(email)
            .orElseThrow(() -> new AuthException("Invalid email or password."));
        if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
            throw new AuthException("Invalid email or password.");
        }
        return new AuthResponse(tokenService.createToken(user), toResponse(user),
            "Login successful.");
    }

    private UserResponse toResponse(UserAccount user) {
        return new UserResponse(user.getId(), user.getFullName(), user.getEmail());
    }
}

