import { Form, Input, Button, Typography, App } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api/instance';

const { Title, Text } = Typography;

export const RegisterPage = () => {
    const navigate = useNavigate();
    const { message } = App.useApp(); 

    const onFinish = async (values) => {
        try {
            await api.post('/register', values);
            message.success('Регистрация прошла успешно! Теперь войдите.');
            navigate('/auth'); 
        } catch (error) {
            message.error('Ошибка при регистрации. Возможно, такой email занят.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '100px auto', padding: '0 20px' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Регистрация</Title>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item 
                    name="email" 
                    label="Email" 
                    rules={[{ required: true, message: 'Введите email' }, { type: 'email', message: 'Некорректный email' }]}
                >
                    <Input placeholder="example@mail.com" size="large" />
                </Form.Item>

                <Form.Item 
                    name="password" 
                    label="Пароль" 
                    rules={[{ required: true, message: 'Придумайте пароль' }, { min: 6, message: 'Минимум 6 символов' }]}
                >
                    <Input.Password placeholder="******" size="large" />
                </Form.Item>

                <Button type="primary" htmlType="submit" block size="large" style={{ marginTop: 10 }}>
                    Создать аккаунт
                </Button>
            </Form>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Text type="secondary">Уже есть аккаунт? </Text>
                <Link to="/auth">Войти</Link>
            </div>
        </div>
    );
};