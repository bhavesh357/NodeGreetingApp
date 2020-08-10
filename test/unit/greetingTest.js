const chai = require('chai');
const chaiHttp = require('chai-http');
const {assert} = require('chai');
const app = require('./../../server');

chai.use(chaiHttp);

let result;

describe('Greeting App Test', () => {
    describe('HTTP METHODS Test', () => {
        it('GET /', (done) => {
            chai.request(app)
                .get('/')
                .end((err, response) => {
                    result = response.body.message;
                    assert.equal(result, 'Hello');
                    done();
                });
        });
    });
});
