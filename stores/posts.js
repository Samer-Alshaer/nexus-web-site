import { defineStore } from "pinia";

export const posts = defineStore("posts", {
  state: () => ({
    posts: [],
    currentPost: null,
  }),

  actions: {
    async fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = await response.json();
    },

    setCurrentPost(id) {
      this.currentPost = id;
    },
  },

  getters: {
    getPosts() {
      return this.posts;
    },

    getCurrentPost() {
      return this.currentPost;
    },
  },
});
