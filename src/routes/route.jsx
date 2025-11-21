import axios from "axios";
import { createBrowserRouter, redirect } from "react-router";
import Auth from "../layout/auth/Auth";
import Qr from "../layout/pages/qr/Qr";
import User from "../layout/pages/user/User";
import Base from "../templates/Base";
import Test from "../Test";


const router = createBrowserRouter([
    {
        Component: Base,
        children: [
            {
                index: true,
                lazy: async () => {
                    const [Component, action] = await Promise.all([
                        Auth,
                        async ({ request }) => {
                            const formdata = await request.formData();
                            const username = formdata.get('username');
                            const password = formdata.get('password');
                            let response = await axios.post('/api/auth', {
                                username,
                                password
                            });
                            const now = new Date();
                            const expiryTime = now.getTime() + (24 * 60 * 60 * 1000);
                            let send_data = {
                                "response": response.data,
                                "isLogin": true,
                                "expiry_time": expiryTime
                            };

                            localStorage.setItem('loginData', JSON.stringify(send_data));
                            return redirect('user');
                        }
                    ]);
                    return { Component, action }
                },
            },
            {
                path: 'user',
                lazy: async () => {
                    const [Component] = await Promise.all([
                        User
                    ]);
                    return { Component }
                },
            },
            {
                path: 'qr',
                lazy: async () => {
                    const [Component] = await Promise.all([
                        Qr
                    ]);
                    return { Component }
                }
            },
            {
                path: 'test',
                lazy: async () => {
                    const [Component] = await Promise.all([
                        Test,
                    ]);
                    return { Component };
                }
            }
        ],
    },
]);

export default router