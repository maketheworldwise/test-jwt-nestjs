/*
 * - dotenv 생략 (process.env.*)
 */
export const env = {
  JWT_SECRET: 'mtw2',
  JWT_ISSUER: 'maketheworldwise',
  JWT_AUDIENCE: ['https://api.example.com', 'https://api.mtw2.com'], // authorization servers
  JWT_ACCESS_EXP: '7200000', // 2h
  JWT_REFRESH_EXP: '1209600000', // 14 days
};
