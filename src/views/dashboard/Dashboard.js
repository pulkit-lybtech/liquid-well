import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import { CChartDoughnut } from '@coreui/react-chartjs'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol sm="12" lg="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol sm="5">
                  <h4 id="traffic" className="card-title mb-0">Revenue </h4>
                  <div className="small text-muted"> </div>
                </CCol>
                <CCol sm="7" className="d-none d-md-block">
                  <CButton color="primary" className="float-right">
                    <CIcon name="cil-cloud-download" />
                  </CButton>
                  {/* <CButtonGroup className="d-none float-right mr-3">
                  {
                    ['Day', 'Month', 'Year'].map(value => (
                      <CButton
                        color="outline-secondary"
                        key={value}
                        className="mx-0"
                        active={value === 'Month'}
                      >
                        {value}
                      </CButton>
                    ))
                  }
                </CButtonGroup> */}
                </CCol>
              </CRow>
              <MainChartExample style={{ height: '300px', marginTop: '40px' }} />
            </CCardBody>
            <CCardFooter className="d-none ">
              <CRow className="text-center">
                <CCol md sm="12" className="mb-sm-2 mb-0">
                  <div className="text-muted">Visits</div>
                  <strong>29.703 Users (40%)</strong>
                  <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="success"
                    value={40}
                  />
                </CCol>
                <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                  <div className="text-muted">Unique</div>
                  <strong>24.093 Users (20%)</strong>
                  <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="info"
                    value={40}
                  />
                </CCol>
                <CCol md sm="12" className="mb-sm-2 mb-0">
                  <div className="text-muted">Pageviews</div>
                  <strong>78.706 Views (60%)</strong>
                  <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="warning"
                    value={40}
                  />
                </CCol>
                <CCol md sm="12" className="mb-sm-2 mb-0">
                  <div className="text-muted">New Users</div>
                  <strong>22.123 Users (80%)</strong>
                  <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    color="danger"
                    value={40}
                  />
                </CCol>
                <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                  <div className="text-muted">Bounce Rate</div>
                  <strong>Average Rate (40.15%)</strong>
                  <CProgress
                    className="progress-xs mt-2"
                    precision={1}
                    value={40}
                  />
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>

        <CCol lg="4">
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0  ">Geographic Location </h4>
            </CCardHeader>
            <CCardBody>
              <CChartDoughnut
                className="my-4"
                // style={{height: '180px'}}
                datasets={[
                  {
                    label: '2019',
                    // backgroundColor: '#f5c',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    tooltipLabelColor: 'rgba(179,181,198,1)',
                    data: [65, 59,],
                  },
                ]}
                options={{
                  aspectRatio: 1.5,
                  tooltips: {
                    enabled: true
                  }
                }}
                labels={[
                  'Delhi', 'Haryana', 'Mumbai', 'Kolkata',
                ]}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>


      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Traffic {' & '} Sales</h4>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">New Users </small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Recurring Clients</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  <h5 className="my-3">Day of The week </h5>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Tuesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Wednesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Thursday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Friday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Saturday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      New User
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Recurring Users
                    </small>
                    <hr className="mb-0" />
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Total views</small>
                        <br />
                        <strong className="h4">78,623</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Clicks </small>
                        <br />
                        <strong className="h4">49 </strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  <h5 className="my-3">By Gender </h5>

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="43" />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user-female" />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="37" />
                    </div>
                  </div>

                  <h5 className=" mb-3"> Devices  </h5>

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-globe-alt" />
                      <span className="title"> Web browsers </span>
                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="56" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cil-globe-alt" className="progress-group-icon" />
                      <span className="title">Mobiles </span>
                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cil-globe-alt" className="progress-group-icon" />
                      <span className="title">Tablets</span>
                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon name="cil-globe-alt" className="progress-group-icon" />
                      <span className="title">Others </span>
                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8" />
                    </div>
                  </div>
                  

                </CCol>
              </CRow>

              <br />

              {/* <table className="table d-none table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-mastercard" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-stripe" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-es" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-pl" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                </tbody>
              </table> */}

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>


      <CRow >
        <CCol lg="6">
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Storage </h4>
            </CCardHeader>
            <CCardBody className="p-0">
              <table className="table table-bordered  mb-0 d-none d-sm-table">
                <thead className="thead-light bg-light ">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    {/* <th className="text-center"></th> */}
                    <th>Usage</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td>
                      <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td>
                      <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td>
                      <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td>
                      <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td>
                      <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015</small>
                          </div>
                        </div>
                        <CProgress className="progress-xs" color="success" value="50" />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="6">
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Engagement  </h4>
              <p className="mb-0 text-muted">
                See Average time spent by user.
              </p>
            </CCardHeader>
            <CCardBody className="p-0">
            <table className="table table-bordered  mb-0   d-sm-table">
                <thead className="thead-default ">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    {/* <th className="text-center"></th> */}
                    <th>Time spent</th>
                    <th>Attempted</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                       
                      </td>
                      <td>
                          <div className="text-left">
                            <strong>50 min </strong>
                          </div>
                      </td>
                      <td>
                        <div className="text-dark text-left">45</div>
                      </td>
                    </tr>
                  
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                       
                      </td>
                      <td>
                          <div className="text-left">
                            <strong>50 min </strong>
                          </div>
                      </td>
                      <td>
                        <div className="text-dark text-left">45</div>
                      </td>
                    </tr>
                  
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                       
                      </td>
                      <td>
                          <div className="text-left">
                            <strong>50 min </strong>
                          </div>
                      </td>
                      <td>
                        <div className="text-dark text-left">45</div>
                      </td>
                    </tr>
                  
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                       
                      </td>
                      <td>
                          <div className="text-left">
                            <strong>50 min </strong>
                          </div>
                      </td>
                      <td>
                        <div className="text-dark text-left">45</div>
                      </td>
                    </tr>
                  
                    <tr>
                      <td className="text-center ">
                        1
                      </td>
                      <td>
                        <div>Rajat Kumar </div>
                       
                      </td>
                      <td>
                          <div className="text-left">
                            <strong>50 min </strong>
                          </div>
                      </td>
                      <td>
                        <div className="text-dark text-left">45</div>
                      </td>
                    </tr>
                  
                </tbody>
              </table>
            </CCardBody>
            <CCardFooter className="d-flex ">
              <p className="mb-0">
                Total Time Spent
              </p>
              <div className="ml-auto text-right">
                <strong>4 Hours</strong>
              </div>

            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>



      <CRow >
        <CCol lg="8">
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Latest Transaction  </h4>
            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
        <CCol lg="4">
          <CCard>
            <CCardHeader>
              <h4 className="card-title mb-0">Clicks Per Page   </h4>
            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Dashboard
