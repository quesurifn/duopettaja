/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Header.css";

interface IProps {
  goal?: string;
}

interface IState {
  goal: string;
}

class Header extends Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <nav>
        <header>
          <span>
            <Link to={"/"}>
              <button className="link-main">Duopettaja</button>
            </Link>
          </span>
        </header>
        <div>
          <div>
            <span>Goal: {this.props.goal}</span>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state: IState): any {
  const { goal } = state;
  return {
    goal,
  };
}

export default connect(mapStateToProps, null)(Header);
