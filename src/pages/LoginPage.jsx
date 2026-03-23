import { useAuthStore } from '../store/auth-store';
import { api } from '../api/instance';
import { Link, useNavigate } from 'react-router-dom'; 
import { Form, Input, Button} from 'antd';
import { Typography } from 'antd';



export const LoginPage = () => {
    const navigate = useNavigate();
    const login = useAuthStore(state => state.login);
    const { Text } = Typography;

    const onFinish = async (values) => {
        try {
            const { data } = await api.post('/auth', values);
            login(data.data, data.token); 
            navigate('/'); 
        } catch (e) {
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '100px auto' }}>
            <h2>Вход</h2>
            <Form onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true }]}><Input placeholder="Email" /></Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}><Input.Password placeholder="Пароль" /></Form.Item>
                <Button type="primary" htmlType="submit" block>Войти</Button>
                <div style={{ textAlign: 'center', marginTop: 20 }}>
                    <Text type="secondary">Еще нет аккаунта? </Text>
                    <Link to="/register">Зарегистрироваться</Link>
                </div>
            </Form>
        </div>
    );
};