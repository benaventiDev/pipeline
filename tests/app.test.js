const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('movies api', () => {
    test('should return 200 with all movies', async () => {
        await api
            .get('/api/v1/movies/')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('should return 404 with no movies', async () => {
        await api
            .get('/api/v1/movies/100000')
            .expect(404)

    })

    test('should return 200 with the first movie', async () => {
        await api
            .get('/api/v1/movies/1')
            .expect(200)

    })

    test('should return 204 with movie deleted', async () => {
        await api
            .delete('/api/v1/movies/1')
            .expect(204)
    })
})

