import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../../services/user.service";

import "./scss/signup.scss";

import Input from "../tools/Input";
import Button from "../tools/Button";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangePseudo = this.onChangePseudo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordRe = this.onChangePasswordRe.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.saveUser = this.saveUser.bind(this);

    this.state = {
      id: null,
      pseudo: "",
      email: "",
      password: "",
      password_re: "",

      password_no_error: false,
      message_error: false,
      submitted: false,
    };
  }

  onChangePseudo(e) {
    this.setState({
      pseudo: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangePasswordRe(e) {
    this.setState({
      password_re: e.target.value,
    });
  }

  checkPassword() {
    if (
      !this.state.password ||
      this.state.password !== this.state.password_re
    ) {
      this.setState({ password_no_error: true });
      return false;
    } else {
      this.setState({ password_no_error: false });
      return true;
    }
  }

  saveUser() {
    console.log(this.state);

    if (this.checkPassword()) {
      var data = {
        pseudo: this.state.pseudo,
        email: this.state.email,
        password: this.state.password,
      };

      UserDataService.create(data)
        .then((response) => {
          this.setState({
            id: response.data.id,
            pseudo: response.data.pseudo,
            email: response.data.email,
            password: response.data.password,

            submitted: true,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      this.setState({
        message_error: true,
      });
    }
  }

  render() {
    return (
      <div className="sign-up">
        {this.state.submitted ? (
          <div className="success">
            <h2>Inscription réussi !</h2>

            <div className="buttons submit">
              <Link to="/">
                <Button Type="button" Label="Se connecter" />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="pseudo">
              <Input
                Name="pseudo"
                LabelName="Pseudo"
                Type="text"
                Class="sign-up-text"
                Value={this.state.pseudo}
                OnChange={this.onChangePseudo}
              />
            </div>
            <div className="mail">
              <Input
                Name="mail"
                LabelName="Adresse mail"
                Type="mail"
                Value={this.state.email}
                OnChange={this.onChangeEmail}
              />
            </div>
            <div className="pwd-group">
              <div className="pwd">
                <Input
                  Name="password"
                  LabelName="Mot de passe"
                  Type="password"
                  Class="sign-up-password"
                  Value={this.state.password}
                  OnChange={this.onChangePassword}
                />
              </div>
              <div className="pwd-verify">
                <Input
                  Name="password-verify"
                  LabelName="Confirmer mot de passe"
                  Type="password"
                  Class="sign-up-password"
                  Value={this.state.password_re}
                  OnChange={this.onChangePasswordRe}
                />
              </div>
            </div>

            {this.state.message_error ? (
              <div className="error">Les mots de passes sont différents</div>
            ) : (
              ""
            )}

            <div className="buttons submit">
              <Link to="/">
                <Button Type="button" Label="Retour" TypeName="back" />
              </Link>
              <Button
                Type="submit"
                Label="S'inscrire"
                onClick={this.saveUser}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}
