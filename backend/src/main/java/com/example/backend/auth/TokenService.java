package com.example.backend.auth;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.Base64;

@Service
public class TokenService {
    private final String secret;

    public TokenService(@Value("${skillbridge.jwt-secret}") String secret) {
        if (secret == null || secret.length() < 32) {
            throw new IllegalStateException("skillbridge.jwt-secret must be at least 32 characters.");
        }
        this.secret = secret;
    }

    // Compact signed token (HS256-style) for the project prototype.
    public String createToken(UserAccount user) {
        long expiry = Instant.now().plusSeconds(60L * 60L * 24L).getEpochSecond();
        String header = base64Url("{\"alg\":\"HS256\",\"typ\":\"JWT\"}");
        String payload = base64Url("{\"sub\":\"" + user.getId() + "\",\"email\":\""
            + escape(user.getEmail()) + "\",\"name\":\"" + escape(user.getFullName())
            + "\",\"exp\":" + expiry + "}");
        String content = header + "." + payload;
        return content + "." + sign(content);
    }

    private String sign(String value) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256"));
            return Base64.getUrlEncoder().withoutPadding()
                .encodeToString(mac.doFinal(value.getBytes(StandardCharsets.UTF_8)));
        } catch (Exception ex) {
            throw new IllegalStateException("Could not create authentication token.", ex);
        }
    }

    private static String base64Url(String value) {
        return Base64.getUrlEncoder().withoutPadding()
            .encodeToString(value.getBytes(StandardCharsets.UTF_8));
    }

    private static String escape(String value) {
        return value.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}

