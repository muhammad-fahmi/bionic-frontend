import axios from "axios";
import { lazy } from "react";
import { createBrowserRouter, isRouteErrorResponse, redirect, useRouteError } from "react-router";
const Auth = lazy(() => import('../layout/auth/Auth'));
const Qr = lazy(() => import('../layout/pages/qrcode/Qr'));
const User = lazy(() => import('../layout/pages/user/User'));
const Base = lazy(() => import('../templates/Base'));

function RootErrorBoundary() {
    let error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}


const router = createBrowserRouter([
    {
        Component: Base,
        ErrorBoundary: RootErrorBoundary,
        children: [
            {
                index: true,
                Component: Auth,
                action: async ({ request }) => {
                    const formdata = await request.formData();
                    const username = formdata.get('username');
                    const password = formdata.get('password');
                    let isOK = false;
                    await axios.post('/auth', {
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
                    const [Component] = await Promise.all([
                        User
                    ]);
                    return { Component }
                },
            },
            {
                path: 'qr',
                Component: Qr
            },
        ],
    },
], { basename: '/bionic-frontend' });

export default router