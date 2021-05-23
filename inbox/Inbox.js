import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class inbox extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-5 col-md-5 mb-5 offset-md-1">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-inbox batch-icon-xxl" />
                <div className="display-4 mt-4">Data Pendaftar</div>
                <p>lihat data pendaftar yang sudah masuk</p>
                <Link to="/inbox/suratmasuk" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Lihat Data Masuk</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-5 col-md-5 mb-5">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-inbox batch-icon-xxl" />
                <div className="display-4 mt-4">Data Lanjutan Pendaftar</div>
                <p>lihat data lanjutan yang sudah masuk</p>
                <Link to="/inbox/datalanjutan" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Lihat Data</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-5 col-md-5 mb-5 offset-md-1">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-inbox-alt batch-icon-xxl" />
                <div className="display-4 mt-4">Proposal Masuk</div>
                <p>lihat data proposal yang sudah masuk</p>
                <Link to="/inbox/disposisimasuk" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Lihat Proposal Masuk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

const _state = state => ({});
const _actions = dispatch => bindActionCreators({}, dispatch);

export default connect(_state, _actions)(inbox);
