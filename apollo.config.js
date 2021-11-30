module.exports = {
    client: {
        includes: ['./src/**/*.{ts,tsx}'],
        tagName: "gql",
        service: {
            name: "instaclone",
            url: 'http://localhost:4200/graphql',
        }
    }
}