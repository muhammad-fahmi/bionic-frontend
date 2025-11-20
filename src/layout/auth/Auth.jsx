import { Form } from "react-router";
import './Auth.css';

export default function Auth() {
    localStorage.removeItem('loginData');
    localStorage.removeItem('scanData');
    return (
        <div className="container-fluid vh-100 p-3 d-flex justify-content-center align-items-center auth_container">
            <div className="card p-2 w-100">
                <h3 className="title text-center">LOGIN</h3>
                <Form method="post">
                    <div className="m-2">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" id="username" name="username" className="form-control" />
                    </div>
                    <div className="m-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    <div className="m-2 text-end">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
