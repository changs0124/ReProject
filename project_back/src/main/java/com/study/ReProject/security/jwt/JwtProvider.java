package com.study.ReProject.security.jwt;

import com.study.ReProject.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtProvider {

    private final Key key;

    public JwtProvider(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public Date getExpireDate() {
        return new Date(new Date().getTime() + (1000L * 60 * 60 * 24 * 30));
    }

    public String generatedAccessToken(User user) {
        return Jwts.builder()
                .claim("userId", user.getUserId())
                .expiration(getExpireDate())
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String removeBearer(String bearerToken) throws RuntimeException {
        int bearerLength = "Bearer ".length();
        if(bearerToken == null) {
            throw new RuntimeException();
        }
        return bearerToken.substring(bearerLength);
    }

    public Claims getClaims(String accessToken) {
        JwtParser jwtParser = Jwts.parser()
                .setSigningKey(key)
                .build();

        return jwtParser.parseClaimsJws(accessToken).getPayload();
    }
}