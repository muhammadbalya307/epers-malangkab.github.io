import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Modal, Button, Upload } from 'antd';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};
class disposisiKeluar extends React.Component {
  componentWillMount() {}
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

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
            <h1>Proposal Ditolak</h1>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            <div className="card" style={styles.fadeIn}>
              <div className="card-body">
                <div className="pull-right">
                  {/*<Button
                    type="button"
                    className="btn btn-primary btn-gradient waves-effect waves-light"
                    onClick={this.showModal}
                  >
                    <span className="gradient"><i className="fa fa-file" /> Berkas</span>
                  </Button>
                  <Modal title="Upload Berkas" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <div className="form-group">
                    <label htmlFor="nomor">Berkas Pemindaian</label>
                      <Upload name="logo" action="/upload.do" listType="picture">
                        <button
                          type="button"
                          className="btn btn-green btn-gradient waves-effect waves-light"
                          style={{ marginRight: 5 }}
                        >
                          <span className="gradient">
                            <i className="fa fa-upload" />&nbsp; Berkas
                          </span>
                        </button>
                      </Upload>
                  </div>
                  </Modal>
                  
                    &nbsp;
                  <Button type="button" className="btn btn-red btn-gradient waves-effect waves-light">
                    <span className="gradient">
                      <i className="fa fa-folder" /> Direktori
                    </span>
                  </Button>*/}
                </div>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}> Nomor </th>
                      <th style={{ verticalAlign: 'middle' }}> Nama <br /> Pengirim </th>
                      <th style={{ verticalAlign: 'middle' }}> Perihal <br /> Proposal </th>
                      <th style={{ verticalAlign: 'middle' }}> Tanggal <br /> Masuk </th>
                      <th style={{ verticalAlign: 'middle' }}> Asal <br/> Instansi </th>
                      <th style={{ verticalAlign: 'middle' }}> File <br/> Proposal </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    <tr>
                      <div className="col-md-12">
                        <div className="alert alert-info">Tidak ada data.</div>
                      </div>
                    </tr>
                  </tbody> */}
                </table>
                <div className="col-md-12">
                  <div className="alert alert-info">Tidak ada data.</div>
                </div>
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

export default connect(_state, _actions)(disposisiKeluar);
