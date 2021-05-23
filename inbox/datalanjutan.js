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

class datamasuk extends React.Component {
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
                    className="btn btn-primary dropdown-toggle waves-effect waves-light"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
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
            <h1>Data Lanjutan</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Data Lanjutan</Breadcrumb.Item>
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
                      <i className="fa fa-plus" /> Data Lanjutan
                    </span>
                  </Link>
                </div>*/}
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}> Nomor </th>
                      <th style={{ verticalAlign: 'middle' }}> Nama <br /> Pendaftar </th>
                      <th style={{ verticalAlign: 'middle' }}> NPWP </th>
                      <th style={{ verticalAlign: 'middle' }}> Asal <br /> Instansi </th>
                      <th style={{ verticalAlign: 'middle' }}> Alamat Instansi </th>
                      <th style={{ verticalAlign: 'middle' }}> ID Pers </th>
                      <th style={{ verticalAlign: 'middle' }}> Lisensi ( SIUP ) </th>
                      <th style={{ verticalAlign: 'middle' }}> Tipe Media </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Muhammad Ibrahim</td>
                      <td>8738967943879182</td>
                      <td>KPJ Media</td>
                      <td>JL Raya Ahmad Yani 70D Malang</td>
                      <td>KPJ280N928</td>
                      <td>
                      <button type="button" aria-haspopup="true" aria-expanded="false">Lihat File</button>
                      </td>
                      <td>Media Online</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Ahmad Haryanto</td>
                      <td>Peer Media Malang</td>
                      <td>JL Basuki Rahmat 103A Malang</td>
                      <td>PM993M383</td>
                      <td>
                      <button type="button" aria-haspopup="true" aria-expanded="false">Lihat File</button>
                      </td>
                      <td>Media Cetak</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Rudy Susanto</td>
                      <td>MG TV</td>
                      <td>JL Sukarno-Hatta 07C Malang</td>
                      <td>MG192W282</td>
                      <td>
                      <button type="button" aria-haspopup="true" aria-expanded="false">Lihat File</button>
                      </td>
                      <td>Televisi</td>
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

export default connect(_state, _actions)(datamasuk);
