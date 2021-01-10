import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import UserDataService from "../../services/user.service";

import "./scss/signin.scss";

import Input from "../tools/Input";
import Button from "../tools/Button";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.connectUser = this.connectUser.bind(this);

    this.state = {
      email: "",
      password: "",

      error_connection: "",
      redirect: false,
    };
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

  connectUser() {
    UserDataService.getAll()
      .then((response) => {
        response.data.forEach((element) => {
          if (
            this.state.email === element.email &&
            this.state.password === element.password
          ) {
            this.setState({
              redirect: true,
            });
          } else {
            this.setState({
              error_connection: "L'email ou le mot de passe est incorrect",
            });
          }
        });
        console.log("test");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        {this.state.redirect ? (
          <Redirect to="/home"></Redirect>
        ) : (
          <div className="sign-in">
            <div className="mail">
              <Input
                Name="mail"
                LabelName="Adresse mail"
                Type="mail"
                Value={this.state.email}
                OnChange={this.onChangeEmail}
              />
            </div>

            <div className="pwd">
              <Input
                Name="password"
                LabelName="Mot de passe"
                Type="password"
                Value={this.state.password}
                OnChange={this.onChangePassword}
              />
            </div>

            <div className="error">{this.state.error_connection}</div>

            <div className="buttons">
              <Button
                Type="submit"
                Label="Se connecter"
                onClick={this.connectUser}
              />

              <Link to="/signup">
                <Button Type="button" Label="S'inscrire" TypeName="sign-up" />
              </Link>
            </div>
          </div>
        )}
      </>
    );
  }
}
