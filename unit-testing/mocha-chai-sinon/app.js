const axios = require("axios");

class User{
    constructor(userName, viewRepos=false){
        this.userName = userName;
        this.canViewRepos = viewRepos;
    }
    getUserID() {
        return axios.get(`https://api.github.com/users/${this.userName}`)
         .then(response => response.data.id);
     }

    getUserRepo(repoIndex){
        if (this.canViewRepos){
            return axios.get(`https://api.github.com/users/${this.userName}/repos`)
                .then(response => response.data[repoIndex])
        }
        return Promise.reject("cannot view repo");
    }

    getUserFollowerNumbers(){
        return axios.get(`https://api.github.com/users/${this.userName}/followers`)
        .then(response=> response.data.length);
    }
}

module.exports = {
    User,
}