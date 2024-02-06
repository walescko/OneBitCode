class Comment{
    constructor(username, content) {
        this.username = username
        this.content = content
        this.createdAd = new Date()
    }
}

module.exports = Comment