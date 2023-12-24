import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'

export class UserEditingView extends Component {

    avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

    state = {
        avatarUrl: '/img/avatars/thumb-6.jpg',
        name: this.props.data.name || '',
        email: this.props.data.email || '',
        address: this.props.data.address.city || '',
        phone: this.props.data.phone || '',
        website: this.props.data.website || '',
    }



    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    render() {
        const { name, email, address, phone, website } = this.state;

        const onFinish = values => {
            const key = 'updatable';
            message.loading({ content: 'Updating...', key });
            setTimeout(() => {
                this.setState({
                    name: values.name,
                    email: values.email,
                    address: values.address,
                    phoneNumber: values.phoneNumber,
                    website: values.website,
                })
                message.success({ content: 'Done!', key, duration: 2 });
            }, 1000);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onUploadAavater = info => {
            const key = 'updatable';
            if (info.file.status === 'uploading') {
                message.loading({ content: 'Uploading...', key, duration: 1000 });
                return;
            }
            if (info.file.status === 'done') {
                this.getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        avatarUrl: imageUrl,
                    }),
                );
                message.success({ content: 'Uploaded!', key, duration: 1.5 });
            }
        };

        const onRemoveAvater = () => {
            this.setState({
                avatarUrl: ''
            })
        }

        return (
            <>
                <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <Avatar size={90} src={this.state.avatarUrl} icon={<UserOutlined />} />
                    <div className="ml-md-3 mt-md-0 mt-3">
                        <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
                            <Button type="primary">Сменить</Button>
                        </Upload>
                        <Button className="ml-2" onClick={onRemoveAvater}>Удалить</Button>
                    </div>
                    <Button onClick={this.props.close}>Закрыть</Button>
                </Flex>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'email': email,
                                'address': address,
                                'phone': phone,
                                'website': website,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phone"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24}>
                                        <Form.Item
                                            label="Address"
                                            name="address"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit" onClick={() => {
                                    setTimeout(this.props.close, 1500);
                                }}>
                                    Сохранить изменения
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        )
    }

}

export default UserEditingView