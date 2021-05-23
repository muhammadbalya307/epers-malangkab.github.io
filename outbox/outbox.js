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

class outbox extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-outbox batch-icon-xxl" />
                <div className="display-4 mt-4">Data Terverifikasi</div>
                <p>data pendaftar yang sudah terverivikasi</p>
                <Link to="/outbox/suratKeluar" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Data Terverifikasi</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-outgoing batch-icon-xxl" />
                <div className="display-4 mt-4">Proposal Ditolak</div>
                <p>data proposal yang Ditolak</p>
                <Link to="/outbox/disposisikeluar" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Proposal Ditolak</span>
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

export default connect(_state, _actions)(outbox);
