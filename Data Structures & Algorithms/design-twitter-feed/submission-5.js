class Twitter {
    constructor() {
        this.postMap = new Map();
        this.followersMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time++;
        const newTweet = { tweetId, time: this.time }
        if(this.postMap.has(userId)) {
            const posts = this.postMap.get(userId);
            posts.push(newTweet)
            this.postMap.set(userId, posts)
        } else {
            this.postMap.set(userId, [newTweet])
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const users = [...(this.followersMap.get(userId) || [])];
        users.push(userId);

        const posts = []
        for(let userId of users) {
            posts.push(...(this.postMap.get(userId) || []));
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
        if(this.followersMap.has(followerId)) {
            const followers = this.followersMap.get(followerId);
            followers.add(followeeId);
            this.followersMap.set(followerId, followers)
        } else {
            this.followersMap.set(followerId, new Set([followeeId]))
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followersMap.has(followerId)) {
            const followers = this.followersMap.get(followerId);
            followers.delete(followeeId);
            this.followersMap.set(followerId, followers)
        }
    }
}
