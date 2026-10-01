class Twitter {
    constructor() {
        this.time = 0;
        this.postMap = new Map();
        this.followingMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time++
        if(this.postMap.has(userId)) {
            const allPosts = this.postMap.get(userId);
            allPosts.push({tweetId, time: this.time})
            this.postMap.set(userId, allPosts);
        } else {
            this.postMap.set(userId, [{tweetId, time: this.time}])
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = [...(this.followingMap.get(userId) || [])]
        users.push(userId);

        const posts = [];
        for(let userId of users) {
            if(this.postMap.has(userId)) {
                posts.push(...this.postMap.get(userId))
            }
        }

        const minHeap = new MinPriorityQueue((post) => post.time);

        for(let post of posts) {
            if(minHeap.size() < 10) {
                minHeap.enqueue(post)
            } else if(post.time > minHeap.front().time) {
                minHeap.dequeue();
                minHeap.enqueue(post)
            }
        }

        const res = [];

        while(minHeap.size()) {
            res.push(minHeap.dequeue().tweetId)
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
            const allFollowers = this.followingMap.get(followerId);
            allFollowers.push(followeeId);
            this.followingMap.set(followerId, allFollowers)
        } else {
            this.followingMap.set(followerId, [followeeId])
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followingMap.has(followerId)) {
            const newFollowees = this.followingMap.get(followerId).filter((followee) => followee != followeeId);
            this.followingMap.set(followerId, newFollowees)
        }
    }
}
