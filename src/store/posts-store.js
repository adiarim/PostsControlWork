import { create } from 'zustand';
import { api } from '../api/instance';

export const usePostsStore = create((set) => ({
    posts: [],
    loading: false,

    fetchPosts: async () => {
        set({ loading: true });
        try {
            const { data } = await api.get('/posts');
            set({ posts: data });
        } finally {
            set({ loading: false });
        }
    },

    addPost: async (postData) => {
        const { data } = await api.post('/posts', postData);
        set((state) => ({ posts: [...state.posts, data] }));
    }
}));