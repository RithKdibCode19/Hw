import myPro from "../assets/img/profile.jpg"

const Home = () => {
  return (
    <>
  <div className="wrapper">
    <div className="main-header">
      <div className="logo-header">
        <a href="index.html" className="logo">
          Ready Dashboard
        </a>
        <button
          className="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <button className="topbar-toggler more">
          <i className="la la-ellipsis-v" />
        </button>
      </div>
      <nav className="navbar navbar-header navbar-expand-lg">
        <div className="container-fluid">
          <form
            className="navbar-left navbar-form nav-search mr-md-3"
            action=""
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="la la-search search-icon" />
                </span>
              </div>
            </div>
          </form>
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-envelope" />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-bell" />
                <span className="notification">3</span>
              </a>
              <ul
                className="dropdown-menu notif-box"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <div className="dropdown-title">
                    You have 4 new notification
                  </div>
                </li>
                <li>
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary">
                        {" "}
                        <i className="la la-user-plus" />{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">New user registered</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-success">
                        {" "}
                        <i className="la la-comment" />{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">Rahmad commented on Admin</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img src={myPro} alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="block">Reza send messages to you</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-danger">
                        {" "}
                        <i className="la la-heart" />{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">Farrah liked Admin</span>
                        <span className="time">17 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    {" "}
                    <strong>See all notifications</strong>{" "}
                    <i className="la la-angle-right" />{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle profile-pic"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                {" "}
                <img
                  src={myPro}
                  alt="user-img"
                  width={36}
                  className="img-circle"
                />
                <span>Hizrian</span>{" "}
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <div className="user-box">
                    <div className="u-img">
                      <img src={myPro} alt="user" />
                    </div>
                    <div className="u-text">
                      <h4>Hizrian</h4>
                      <p className="text-muted">hello@themekita.com</p>
                      <a
                        href="profile.html"
                        className="btn btn-rounded btn-danger btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="ti-user" /> My Profile
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  My Balance
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ti-email" /> Inbox
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="ti-settings" /> Account Setting
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <i className="fa fa-power-off" /> Logout
                </a>
              </ul>
              {/* /.dropdown-user */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="sidebar">
      <div className="scrollbar-inner sidebar-wrapper">
        <div className="user">
          <div className="photo">
            <img src={myPro} />
          </div>
          <div className="info">
            <a
              className=""
              data-toggle="collapse"
              href="#collapseExample"
              aria-expanded="true"
            >
              <span>
                Hizrian
                <span className="user-level">Administrator</span>
                <span className="caret" />
              </span>
            </a>
            <div className="clearfix" />
            <div
              className="collapse in"
              id="collapseExample"
              aria-expanded="true"
              style={{}}
            >
              <ul className="nav">
                <li>
                  <a href="#profile">
                    <span className="link-collapse">My Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#edit">
                    <span className="link-collapse">Edit Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#settings">
                    <span className="link-collapse">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li className="nav-item active">
            <a href="index.html">
              <i className="la la-dashboard" />
              <p>Dashboard</p>
              <span className="badge badge-count">5</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="components.html">
              <i className="la la-table" />
              <p>Components</p>
              <span className="badge badge-count">14</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="forms.html">
              <i className="la la-keyboard-o" />
              <p>Forms</p>
              <span className="badge badge-count">50</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="tables.html">
              <i className="la la-th" />
              <p>Tables</p>
              <span className="badge badge-count">6</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="notifications.html">
              <i className="la la-bell" />
              <p>Notifications</p>
              <span className="badge badge-success">3</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="typography.html">
              <i className="la la-font" />
              <p>Typography</p>
              <span className="badge badge-danger">25</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="icons.html">
              <i className="la la-fonticons" />
              <p>Icons</p>
            </a>
          </li>
          <li className="nav-item update-pro">
            <button data-toggle="modal" data-target="#modalUpdate">
              <i className="la la-hand-pointer-o" />
              <p>Update To Pro</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-panel">
      <div className="content">
        <div className="container-fluid">
          <h4 className="page-title">Dashboard</h4>
          <div className="row">
            <div className="col-md-6 col-lg-12">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Table</h4>
                  <p className="card-category">Users Table</p>
                </div>
                <div className="card-body">
                  <table className="table table-head-bg-success table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="http://www.themekita.com">
                  ThemeKita
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://themewagon.com/license/#free-item"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright ml-auto">
            2018, made with <i className="la la-heart heart text-danger" /> by{" "}
            <a href="http://www.themekita.com">ThemeKita</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade"
    id="modalUpdate"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="modalUpdatePro"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header bg-primary">
          <h6 className="modal-title">
            <i className="la la-frown-o" /> Under Development
          </h6>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <p>
            Currently the pro version of the <b>Ready Dashboard</b> Bootstrap is
            in progress development
          </p>
          <p>
            <b>We'll let you know when it's done</b>
          </p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Home