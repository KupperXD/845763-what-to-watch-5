import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from "../../store/api-action";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import Footer from "../footer/footer";
import withFormData from "../../hocs/with-form-data/with-form-data";
import {getUser, getError} from "../../store/stateApplication/selectors";

const Fields = {
  EMAIL: `email`,
  PASSWORD: `password`,
};

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this._changeHandler = this._changeHandler.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit, logError, form} = this.props;
    const {email, password} = form;

    evt.preventDefault();

    if (email && password) {
      onSubmit({
        email,
        password
      });

      return;
    }

    logError(`Fields email and password is required.`);
  }

  render() {

    const {user, error} = this.props;

    return (
      <React.Fragment>
        <div className="user-page">

          <Header className={`user-page__head`} title={`Sign in`} user={user} />

          <div className="sign-in user-page__content">
            <form action="#" onSubmit={this.handleSubmit} className="sign-in__form">

              <div className="sign-in__message">
                <p>{error}</p>
              </div>

              <div className="sign-in__fields">
                {this._renderField(Fields.EMAIL, `Email address`)}

                {this._renderField(Fields.PASSWORD, `Password`)}
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }

  _renderField(name, desc) {
    const {form} = this.props;
    const value = form[name] || ``;

    return (
      <div className="sign-in__field">
        <input
          className="sign-in__input"
          type={name}
          placeholder={desc}
          name={name}
          id={name}
          value={value}
          onChange={this._changeHandler}
        />
        <label
          className="sign-in__label visually-hidden"
          htmlFor={name}
        >
          {desc}
        </label>
      </div>
    );
  }

  _changeHandler(evt) {
    const {setValue} = this.props;
    const target = evt.target;

    evt.preventDefault();

    if (target) {
      setValue(target.name, target.value);
    }
  }
}

const mapStateToProps = (state) => ({
  user: getUser(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(login(data));
  },
  logError: (error) => dispatch(ActionCreator.logError(error)),
});

SignIn.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  logError: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

const WithFormSign = withFormData(SignIn);

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(WithFormSign);
