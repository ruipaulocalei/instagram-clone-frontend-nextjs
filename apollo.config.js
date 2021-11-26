module.exports = {
    client: {
        includes: ['./**/*.{ts,tsx}'],
        tagName: "gql",
        service: {
            name: "instaclone",
            url: "http://localhost:3333/graphql"
        }
    }
}