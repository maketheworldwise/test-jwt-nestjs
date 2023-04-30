# test-jwt-nestjs

> 이 프로젝트는 NestJS의 JWT를 간단하게 확인하기 위한 용도로 만들어졌습니다.

## 토큰 생성

[POST] http://localhost:3000/auth

```json
{
  "account": "test@example.com"
  "password": "q1w2e3r4!"
}
```

## 토큰 확인

[GET] http://localhost:3000/auth
