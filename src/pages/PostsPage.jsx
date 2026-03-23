import { useEffect } from 'react';
import { usePostsStore } from '../store/posts-store';
import { Card, Spin } from 'antd';

export const PostsPage = () => {
    const { posts, fetchPosts, loading } = usePostsStore();

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <Spin size="large" />;

    return (
        <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {posts.map(post => (
                <Card key={post.id} title={post.title} style={{ width: 300 }}>
                    <p>{post.summary}</p>
                </Card>
            ))}
        </div>
    );
};