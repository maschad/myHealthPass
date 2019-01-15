const authController = require('./authController')
const { expect } = require('chai')


describe('Auth Controller tests', () => {
    it('Should authenticate the user', () => {
        const username = 'test'
        const password = 'test'

        expect(authController.authenticateUser(username, password)).to.be.true
    })
})