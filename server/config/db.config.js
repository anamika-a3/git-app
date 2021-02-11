module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Winner@19",
    DB: "GitApp",
    dialect: "postgres",
    PORT:5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };