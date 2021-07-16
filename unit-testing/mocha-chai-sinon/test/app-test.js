const {user, User} = require("../app.js");
const axios = require('axios');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;
chai.use(sinonChai);

describe("user class", () => {
    const sandbox = sinon.createSandbox();
    let user;

    beforeEach(() => {
        user = new User("cenarturkmen");
    });
    
    // reset the sandbox for each unit test
    afterEach(() => {
        sandbox.restore();
    });

    it("should get the user id", (done) => {
        const getStub = sandbox.stub(axios, "get").resolves({data: {id: 13212}});
        user.getUserID()
            .then(result => {
                expect(result).to.be.a("number");
                expect(result).to.be.eq(13212);
                expect(getStub).to.have.been.calledOnce;
                expect(getStub).to.have.been.calledWith("https://api.github.com/users/cenarturkmen");
                done();
            })
            .catch(done);
    });

    it("should return a repository if the user can view repos", (done) => {
        const getStub = sandbox.stub(axios, "get").resolves({data: ["repo1", "repo2", "repo3"]});
        sandbox.stub(user,"canViewRepos").value(true);
        user.getUserRepo(2)
            .then(reponse => {
                expect(reponse).to.be.eq("repo3");
                expect(getStub).to.have.been.calledOnceWith("https://api.github.com/users/cenarturkmen/repos");
                done();
            })
            .catch(done);
    });
    it("should return en error if the user cannot view repos", (done) =>{
        const getStub = sandbox.stub(axios, "get");
        sandbox.stub(user,"canViewRepos").value(false);

        user.getUserRepo(2)
        .catch(error=> {
            expect(error).to.be.eq("cannot view repo");
            expect(getStub).to.not.have.been.called;
            done();
        });
    })

    it("should return one of my followers on github",(done) => {
        const getStub = sandbox.stub(axios, "get").resolves({data: ["1","2","3"]});
        user.getUserFollowerNumbers()
            .then(result => {
                expect(result).to.be.eq(3);
                expect(result).to.be.a("number");
                expect(getStub).to.have.been.calledOnceWith("https://api.github.com/users/cenarturkmen/followers");
                done();
            })
            .catch(done);
    });  

});