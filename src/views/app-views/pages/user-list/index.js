import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserEditingView from './UserEditingView';
import Loading from 'components/shared-components/Loading';

export class UserList extends Component {
    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null,
        loading: true,
        editingUserId: null,
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
        console.log(userInfo);
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }

    handleNameClick = (userId) => {
        this.setState({ editingUserId: userId });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com//users')
            .then(response => response.json())
            .then(json => {
                this.setState({ users: json, loading: false });
            })
            .catch(error => {
                console.error('Error:', error);
                this.setState({ loading: false });
            });
    }

    render() {
        const { users, userProfileVisible, selectedUser, loading } = this.state;

        if (loading) {
            <Loading />
        }

        if (userProfileVisible) {
            return (
                <UserEditingView data={selectedUser} visible={userProfileVisible} close={() => { this.closeUserProfile() }} />
            );
        } else {
            const tableColumns = [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    sorter: {
                        compare: (a, b) => {
                            a = a.name.toLowerCase();
                            b = b.name.toLowerCase();
                            return a > b ? -1 : b > a ? 1 : 0;
                        },
                        render: (name, record) => (
                            <span onClick={() => this.handleNameClick(record.id)}>{name}</span>
                        ),
                    },
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    render: address => (
                        <span>{address && address.city ? address.city : '-'}</span>
                    ),
                },
                {
                    title: 'Phone',
                    dataIndex: 'phone',
                },
                {
                    title: 'Website',
                    dataIndex: 'website',
                },
                {
                    title: '',
                    dataIndex: 'actions',
                    render: (_, elm) => (
                        <div className="text-right">
                            <Tooltip title="View">
                                <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
                            </Tooltip>
                            <Tooltip title="Delete">
                                <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
                            </Tooltip>
                        </div>
                    )
                }
            ];

            return (
                <Card bodyStyle={{ 'padding': '0px' }}>
                    <Table columns={tableColumns} dataSource={users} rowKey='id' />
                </Card>
            )
        }
    }
}

export default UserList
