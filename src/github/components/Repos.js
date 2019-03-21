import React, { Component } from "react";
import { CircularProgress } from "react-md";

import { connect } from "react-redux";
import { fetchRepos, selectRepo, unSelectRepo } from "../actions";
import RepoList from "./RepoList";
import RepoDetail from "./RepoDetail";

class Repos extends Component {
  componentDidMount() {
    const { fetchRepos, repos } = this.props;

    const now = new Date();
    if (!repos.lastSuccessfulReposFetch) {
      fetchRepos();
    } else if ((now - repos.lastSuccessfulReposFetch) / 1000 > 300) {
      fetchRepos();
    }
  }

  handleSelectRepo = id => {
    const { repos, selectRepo } = this.props;

    const selectedRepo = repos.items.find(repo => {
      return repo.id === id;
    });
    if (selectedRepo) {
      selectRepo(selectedRepo);
    }
  };

  handleUnSelect = () => {
    this.props.unSelectRepo();
  };

  render() {
    const { repos, selectedRepo } = this.props;
    return repos.isFetchingRepos ? (
      <CircularProgress id="repos-progress" />
    ) : selectedRepo ? (
      <RepoDetail repo={selectedRepo} unselectRepo={this.handleUnSelect} />
    ) : (
      <RepoList repos={repos.items} selectRepo={this.handleSelectRepo} />
    );
  }
}

const mapStateToProps = ({ repos, selectedRepo }) => ({ repos, selectedRepo });

export default connect(
  mapStateToProps,
  { fetchRepos, selectRepo, unSelectRepo }
)(Repos);
