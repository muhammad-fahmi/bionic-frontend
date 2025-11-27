import axios from "axios";
import { createBrowserRouter, redirect } from "react-router";
import Auth from "../layout/auth/Auth";
import Qr from "../layout/pages/qr/Qr";
import User from "../layout/pages/user/User";
import Base from "../templates/Base";

function simulateSuccessfulRequest(data, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data); // Resolve the promise with the simulated data
        }, delay);
    });
}

const router = createBrowserRouter([
    {
        Component: Base,
        children: [
            {
                index: true,
                Component: Auth,
                action: async ({ request }) => {
                    const formdata = await request.formData();
                    const username = formdata.get('username');
                    const password = formdata.get('password');
                    let isOK = false;
                    await axios.post('/api/auth', {
                        username,
                        password
                    })
                        .then((response) => {
                            const now = new Date();
                            const expiryTime = now.getTime() + (24 * 60 * 60 * 1000);
                            let send_data = {
                                "response": response.data,
                                "isLogin": true,
                                "expiry_time": expiryTime
                            };

                            localStorage.setItem('loginData', JSON.stringify(send_data));
                            isOK = true;
                        })
                        .catch((error) => {
                            console.log(error.status);
                        });
                    if (isOK)
                        return redirect('user');
                }
            },
            {
                path: 'user',
                lazy: async () => {
                    const [Component, action] = await Promise.all([
                        User,
                        async ({ request }) => {
                            const formData = await request.formData();
                            const terima = formData.get("terima");
                            const tolak = formData.get("tolak");

                            await simulateSuccessfulRequest('success', 5000)
                            return { terima, tolak };
                        }
                    ]);
                    return { Component, action }
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
        ],
    },
]);

export default router