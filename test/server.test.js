const app = require('../src/app');
const request = require('supertest')(app);

describe('App', () => {
    
    test('GET / should return json with msg "Hello"', async done => {
        const res = await request.get('/');

        expect(res.body).toMatchObject({msg: 'Hello'});

        done();
    })
})
