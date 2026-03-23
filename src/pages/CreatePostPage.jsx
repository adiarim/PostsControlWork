import { useNavigate } from 'react-router-dom';
import { usePostsStore } from '../store/posts-store';
import { Input, Button, Form } from 'antd';

export const CreatePostPage = () => {
    const navigate = useNavigate();
    const addPost = usePostsStore(state => state.addPost);

    const onFinish = async (values) => {
        await addPost(values);
        navigate('/'); 
    };

    return (
        <div style={{ maxWidth: 600, margin: '50px auto' }}>
            <h2>Создать новый пост</h2>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item label="Заголовок" name="title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Краткое описание" name="summary" rules={[{ required: true }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>
                <Button type="primary" htmlType="submit">Опубликовать</Button>
            </Form>
        </div>
    );
};