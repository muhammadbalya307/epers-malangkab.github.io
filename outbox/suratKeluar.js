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

class suratKeluar extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row"style={styles.fadeIn}>
          <div className="col-md-12">
            <div className="pull-right">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button
                    //className="btn btn-primary dropdown-toggle waves-effect waves-light"
                    type="button"
                    //data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cari
                  </button>

                  <div
                    className="dropdown-menu"
                    x-placement="bottom-start"
                    style={{
                      position: 'absolute',
                      transform: 'translate3d(0px, 41px, 0px)',
                      top: '0px',
                      left: '0px',
                      willChange: 'transform',
                    }}
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div role="separator" className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                <div className="input-group-append">
                  <button className="btn btn-green btn-gradient waves-effect waves-light" type="button">
                    <span className="gradient">
                      <i className="fa fa-search" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <h1>Data Masuk Diverifikasi</h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }} style={styles.fadeIn}>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
              <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}> Nomor </th>
                      <th style={{ verticalAlign: 'middle' }}> Nama <br /> Pengirim </th>
                      <th style={{ verticalAlign: 'middle' }}> Tanggal <br /> Verifikasi </th>
                      <th style={{ verticalAlign: 'middle' }}> Asal <br/> Instansi </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Muhammad Ibrahim</td>
                       <td>27 April 2021</td>
                      <td>KPJ Media</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Ahmad Haryanto</td>
                      <td>29 April 2021</td>
                      <td>Peer Media Malang</td>
                      
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Rudy Susanto</td>
                      <td>30 April 2021</td>
                      <td>MG TV</td>

                    </tr>
                  </tbody>
                </table>
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

export default connect(_state, _actions)(suratKeluar);
