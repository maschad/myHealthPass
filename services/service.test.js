const mongoose = require('mongoose')
const service = require('./service')
const testData = require('../util/testData.json')
const mongoUnit = require('mongo-unit')
const { expect } = require('chai')


const testMongoUrl = process.env.MONGO_URL


mongoose.Promise = global.Promise

describe('Service tests', () => {

    beforeEach(() => mongoUnit.initDb(testMongoUrl, testData))
    afterEach(() => mongoUnit.drop())

    it('Should create a user', () => {

        const username = 'user'
        const hash = 'hash'

        return service.createUser(username, hash).
            then((users) => {
                expect(users[0].username).to.equal('test')
            })
    })

    it('Should find a user', () => {
            const username = 'user@gmail.com'

           return service.getUser(username).then((user) => {
                expect(user).to.equal({
                    id: 123434,
                    password: 'password',
                    username: 'user@gmail.com'
                })
           })
    })

    it('Should fail to find a user', () => {
        const username = 'wrong'

        expect(service.getUser(username)).to.be(Error('User not found.'))
        expect(service.getUser(username)).to.have.status(404)
    })
})