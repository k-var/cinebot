import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { getStatus, getData } from "../../actions/itemActions";
import ScrollUp from "../layout/ScrollUp";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      total: null,
      per_page: null,
      current_page: null
    };
  }
  componentDidMount() {
    this.props.getStatus();
    // this.props.getData(1);
  }

  render() {
    const { cinebotStatus, links } = this.props.item;

    return (
      <div className="container mt-5">
        <ScrollUp />
        <div
          className="container pt-3 pb-3"
          style={{
            backgroundColor: "#3b3a30",
            textShadow: "0 1px 3px rgba(0,0,0,.5)",
            color: "white"
          }}
        >
          <div className="container">
            <h1 className="h3">
              Welcome to CineBot!
              <br /> <span className="h4">All the links from one place...</span>
            </h1>
            <hr />
            {cinebotStatus ? (
              <div>
                <h1 className="h4">
                  CineBot last ran @: {cinebotStatus.lastRan}
                </h1>
                <h1 className="h4">
                  CineBot will run again @: {cinebotStatus.nextRun}
                </h1>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div
          className="jumbotron mt-5 mb-5"
          style={{
            backgroundColor: "#3b3a30",
            textShadow: "0 1px 3px rgba(0,0,0,.5)",
            color: "white"
          }}
        >
          <div id="linkSection" className="container">
            {links ? (
              <div className={"ml-3 mr-3"} style={{ textAlign: "left" }}>
                {links.map((link, index) => (
                  <div key={index}>
                    <a href={link.link} style={{ color: "white" }}>
                      <h5>
                        {index + 1}. {link.name}
                      </h5>
                    </a>
                    <a href={link.link} style={{ color: "white" }}>
                      {link.link}
                    </a>
                    <br />
                    <br></br>
                    <br></br>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 text-center">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item">
                          <span onClick={() => console.log("1")}>1</span>
                        </li>
                        <li class="page-item">
                          <span onClick={() => console.log("1")}>2</span>
                        </li>
                        <li class="page-item">
                          <span onClick={() => console.log("1")}>3</span>
                        </li>
                        <li class="page-item">
                          <span onClick={() => console.log("1")}>4</span>
                        </li>
                        <li class="page-item"></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getStatus: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  item: PropTypes.object,
  errors: PropTypes.object
};

const mapDispatchToProps = {
  getStatus: getStatus,
  getData: getData
};

const mapStateToProps = state => ({
  errors: state.errors,
  item: state.item
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
