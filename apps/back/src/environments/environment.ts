export const environment = {
  production: false,
  jwtSecret: process.env.JWT_SECRET ?? "test-secret",
}
