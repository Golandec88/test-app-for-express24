import React from "react";
import {Layout, Breadcrumb } from "antd";
import {Content, Footer, Header } from "antd/lib/layout/layout";

import logo from '../static/logo.png'
import styled from "styled-components";
import {Link} from "react-router-dom";

const DefaultLayout :React.FC = ({children}) => {
    return (
        <Layout className="layout h-100">
            <div className="container h-100">
                <StyledHeader>
                    <Link to={{pathname: '/home'}} className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <StyledBreadCrumbs>
                        <Breadcrumb.Item>
                            <Link to={{pathname: '/home'}}>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                    </StyledBreadCrumbs>
                </StyledHeader>
                <StyledContent>
                    {children}
                </StyledContent>
            </div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

const StyledHeader = styled(Header)`
  display: flex;
  margin: 10px 10px 20px;
  padding: .3rem 2rem;
  height: auto;
  background: white;
  border-radius: 30px;
  .logo img {
    width: 50px;
    margin-right: 1.5rem;
  }
`
const StyledBreadCrumbs = styled(Breadcrumb)`
  display: flex;
  align-items: center;
`
const StyledContent = styled(Content)`
  margin: 10px;
  border-radius: 30px;
  background: white;
  padding: 2rem 2.5rem;
`
export default DefaultLayout