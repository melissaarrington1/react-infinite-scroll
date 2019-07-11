module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "26040fbbd99401ec0c8cbbc42e49ed68f651e8b7cc6b77101f3fb057d0e7d196",
  SECRET:
    process.env.SECRET ||
    "5224c58479a5f5c7679b2197903294f8ec9042667bc5ba189729f03448ec88eb",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
