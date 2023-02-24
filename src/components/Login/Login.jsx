import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer"
import { required } from "../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import createField from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error}) => {
        return (<form onSubmit={handleSubmit}>
                    { createField("Email","email", [required], "input") }
                    { createField("Password","password", [required], "input", {type: "password"}) }
                    { createField(null,"rememberMe", "input", {type: "checkbox"},  "remember me") }

                    { error && <div className={style.formSummaryError}>
                            {error}
                    </div>}
                    <div>
                        <button>Login</button>
                    </div>
                </form>
        )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
        const onSubmit = (formData) => {
              props.login(formData.email, formData.password, formData.rememberMe)
        }

        if(props.isAuth) {
            return <Redirect to={"/profile"} />
        }

        return <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
        </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login); 