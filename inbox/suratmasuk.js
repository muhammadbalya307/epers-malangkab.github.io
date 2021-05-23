import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb } from 'antd';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

import Shell from '../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class suratmasuk extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row" style={styles.fadeIn}>
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
                    // x-placement="bottom-start"
                    // style={{
                    //   position: 'absolute',
                    //   transform: 'translate3d(0px, 41px, 0px)',
                    //   top: '0px',
                    //   left: '0px',
                    //   willChange: 'transform',
                    // }}
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
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  style={styles.fadeIn}
                />
                <div className="input-group-append">
                  <button className="btn btn-green btn-gradient waves-effect waves-light" type="button">
                    <span className="gradient">
                      <i className="fa fa-search" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <h1>Data Masuk</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Data Masuk</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            <div className="card" style={styles.fadeIn}>
              <div className="card-body">
                {/*<div className="pull-right">
                  <Link to="/inbox/inbox-manual" className="btn btn-red btn-gradient waves-effect waves-light">
                    <span className="gradient">
                      <i className="fa fa-plus" /> Surat Manual
                    </span>
                  </Link>
                </div>*/}
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}> Nomor </th>
                      <th style={{ verticalAlign: 'middle' }}> Nama <br /> Pendaftar </th>
                      <th style={{ verticalAlign: 'middle' }}> Email <br /> Pendaftar </th>
                      <th style={{ verticalAlign: 'middle' }}> Nomor <br /> Telepon </th>
                      <th style={{ verticalAlign: 'middle' }}> Tanggal <br /> Pendaftaran </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Muhammad Ibrahim</td>
                      <td>M.Ibrahim77@gmail.com</td>
                      <td>084738432883</td>
                      <td>10/04/2021</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Ahmad Haryanto</td>
                      <td>Haryanto.Ahmad@peermedia.pers</td>
                      <td>087738751363</td>
                      <td>19/04/2021</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Rudy Susanto</td>
                      <td>Rudys@outlook.com</td>
                      <td>089993642562</td>
                      <td>25/04/2021</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Risky Maulana</td>
                      <td>riskymaulana@zoho.com</td>
                      <td>089829423583</td>
                      <td>30/04/2021</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Aditya Rizal</td>
                      <td>AdtRzl@outlook.com</td>
                      <td>085377239249</td>
                      <td>30/04/2021</td>
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

export default connect(_state, _actions)(suratmasuk);
