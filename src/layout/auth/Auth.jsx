import { Form } from "react-router";
import styles from './Auth.module.css';

export default function Auth() {
    return (
        <div className={`container-fluid vh-100 p-3 d-flex flex-column justify-content-center align-items-center ${styles.auth_container}`}>
            <div className={styles.login_container}>
                <h1>LOGIN</h1>

                <Form method="post">
                    <div className={styles.input_group}>
                        <label htmlFor="username" className="text-uppercase">username</label>
                        <input type="text" id="username" placeholder="Username" name="username" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" placeholder="••••••••" name="password" />
                    </div>

                    <button type="submit">SIGN IN</button>
                </Form>
            </div>
        </div>
    );
}
