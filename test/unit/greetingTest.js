const chai = require('chai');
const chaiHttp = require('chai-http');
const {assert} = require('chai');
const app = require('./../../server');

chai.use(chaiHttp);

let result;

describe('Greeting App Test', () => {
    describe('Custom Greeting Test', () => {
        it('POST /greeting', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': 'Bhavesh',
                    'lastName': '',
                })
                .end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello Bhavesh');
                    done();
                });
        });

        it('POST /greeting', (done) => {
            chai.request(app)
                .post('/greeting')
                .send({
                    'firstName': '',
                    'lastName': 'Kadam',
                }).end( (err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello Kadam');
                    done();
                });
        });
    });
    describe('HTTP METHODS Test', () => {
        it('GET /greeting', (done) => {
            chai.request(app)
                .get('/greeting')
                .end((err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello World');
                    done();
                });
        });

        it('POST /greeting', (done) => {
            chai.request(app)
                .post('/greeting')
                .end((err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello World');
                    done();
                });
        });

        it('PUT /greeting', (done) => {
            chai.request(app)
                .put('/greeting')
                .end((err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello World');
                    done();
                });
        });

        it('DELETE /greeting', (done) => {
            chai.request(app)
                .delete('/greeting')
                .end((err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello World');
                    done();
                });
        });
    });
});
