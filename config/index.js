module.exports = {
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || 8080,
    db: {
        username: 'jr',
        password: 'Nelson77',
        database: 'hshnode',
        host: "127.0.0.1"
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
};

