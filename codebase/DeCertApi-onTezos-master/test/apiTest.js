const request = require('supertest');
const expect = require('chai').expect;

const app = require('../src/server');
const conn = require('../src/logic/database');
const business = require('../src/schema/business');

require('dotenv').config();

const adminHeader = {
    'Authorization': `Bearer ${process.env.ADMIN_KEY}`
}
const businessHeader = {
    'Authorization': `Bearer ${process.env.BUSINESS_KEY}`
}

describe('Sample Test', () => {
    before((done) => {
        conn.connect().then(() => {
            done();
        }).catch((err) => {
            done(err);
        })
    });
    after((done) => {
        conn.close()
        done();
    })

    it("should return 200", (done) => {
        request(app)
        .get('/')
        .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.equal('Welcome to our DeCert API');
            done();
        })
        .catch((err) => {
            done(err);
        })
    });

    it("should return 405", (done) => {
        request(app)
        .post('/')
        .set(businessHeader)
        .then((res) => {
            expect(res.statusCode).to.equal(405);
            expect(res.body).to.be.an('object');
            expect(res.body.errors.message).to.equal('Method not allowed');
            done();
        })
        .catch((err) => {
            done(err);
        })
    })

    it("should return 401", (done) => {
        request(app)
        .post('/signup')
        .then((res) => {
            expect(res.statusCode).to.equal(401);
            expect(res.body).to.be.an('object');
            expect(res.body.errors.message).to.equal('Unauthorized');
            done();
        })
        .catch((err) => {
            done(err);
        })
    })

    it("successful signup", (done) => {
        business.deleteOne({ email: 'example@example.com '})
            .then(() => {
                console.log('started new test');
            })
            .catch((err) => {
                console.log(err.message);
            })
        request(app)
        .post('/signup')
        .set(adminHeader)
        .send({
            name: 'test',
            email: 'example@example.com',
            companyName: 'test company'
        })
        .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('email');
            expect(res.body).to.have.property('companyName');
            done();
        })
        .catch((err) => {
            done(err);
        })
    })

    it("successful login", (done) => {
        request(app)
        .post('/login')
        .set(adminHeader)
        .send({
            email: 'example@example.com'
        })
        .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('name');
            expect(res.body).to.have.property('email');
            expect(res.body).to.have.property('companyName');
            done();
        })
        .catch((err) => {
            done(err);
        })
    })

    it("checking minted route", (done) => {
        request(app)
        .post('/minted')
        .set(adminHeader)
        .send({
            email: 'example@example.com'
        })
        .then((res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('message');
            expect(res.body).to.have.property('mintedCertificates');
            done();
        })
        .catch((err) => {
            done(err);
        })
    })
})