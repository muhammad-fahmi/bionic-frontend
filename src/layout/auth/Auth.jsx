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

                <div className={styles.divider}>OR</div>

                <div className={styles.social_login}>
                    <div className={styles.social_btn}>G</div>
                    <div className={styles.social_btn}>F</div>
                    <div className={styles.social_btn}>X</div>
                </div>

                <div className={styles.footer}>
                    Don't have an account? <a href="#">Sign up</a>
                </div>
            </div>
            {/* <div className="card p-3 w-50 h-auto login_form">
                <h3 className="title text-center text-uppercase">
                    Login
                </h3>
                <Form method="post">
                    <FloatingLabel
                        controlId="username"
                        label="Username"
                        className="mb-3"
                    >
                        <FormControl type="text" placeholder="Username" name="username" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="password"
                        label="Password"
                        className="mb-3"
                    >
                        <FormControl type="password" placeholder="Password" name="password" />
                    </FloatingLabel>
                    <div className="m-2 text-end">
                        <Button variant="primary" type="submit">Login</Button>
                    </div>
                </Form>
            </div> */}
        </div>
    );
}
