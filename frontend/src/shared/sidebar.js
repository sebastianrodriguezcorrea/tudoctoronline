import imagen from "../assets/logo192.png";

import "./sidebar.css";

import React, { useState } from "react";

export default function Sidebar() {

  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true);

  return (
    <aside style={{height:"100vh"}} className="main-sidebar sidebar-dark-primary elevation-4">
        <i className="fa-thin fa-candy"></i>
        <span className="brand-text font-weight-light">Tu doctor online</span>
      <div>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={imagen} className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
            </div>
          </div>
        </div>
        <nav>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className={"nav-item" + (itemUsuarioOpen ? " menu-open" : "")}>
              <div>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Crear</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
