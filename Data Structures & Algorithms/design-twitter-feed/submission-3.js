class Twitter {
    constructor() {
        this.postMap = new Map();
        this.followingMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time++
        if(this.postMap.has(userId)) {
            const posts = this.postMap.get(userId);
            posts.push({ tweetId, time: this.time });
            this.postMap.set(userId, posts)
        } else {
            this.postMap.set(userId, [{ tweetId, time: this.time }])
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = [...(this.followingMap.get(userId) || [])];
        users.push(userId);

        const posts = [];
        for(let user of users) {
            posts.push(...(this.postMap.get(user) || []))
        }

        const maxHeap = new MinPriorityQueue((post) => post.time);

        let i = 0

        while(i < posts.length) {
            if(maxHeap.size() < 10) {
                maxHeap.enqueue(posts[i]);
            } else if(posts[i].time > maxHeap.front().time) {
                maxHeap.dequeue();
                maxHeap.enqueue(posts[i])
            }
            i++
        }

        const res = [];
        while(maxHeap.size()) {
            res.push(maxHeap.dequeue().tweetId)
        }
        
        return res.reverse();
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(this.followingMap.has(followerId)) {
            const followers = this.followingMap.get(followerId);
            followers.add(followeeId);
            this.followingMap.set(followerId, followers)
        } else {
            this.followingMap.set(followerId, new Set([followeeId]))
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followingMap.has(followerId)) {
            const followers = this.followingMap.get(followerId);
            followers.delete(followeeId);
            this.followingMap.set(followerId, followers);
        }
    }
}
