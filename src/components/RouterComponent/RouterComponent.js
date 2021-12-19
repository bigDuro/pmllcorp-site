import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Layout } from 'antd';
import { SuperSEO } from "react-super-seo";
import { Homepage, AboutUsPage, Calculators, LoanProgramsPage, ProgramPage, ChecklistPage, GlossaryPage } from '../../pages';
import { AppHeader, AppBreadcrumbs } from '../';
import { seoData } from '../../constants';


const { Content, Footer } = Layout;

const getSeoBlock = (route) => {
  const seo = seoData[route] || seoData.default;
  const { title, description, openGraph, twitter} = seo;

  return (
    <SuperSEO
      title={title}
      description={description}
      lang="en"
      openGraph={openGraph}
      twitter={twitter}
    />
  )
}

export default function RouterComponent(props) {
  const { history } = props;
  return (
    <Router history={history}>
      <Layout className="layout">
        <AppHeader/>
        <Content>
            <Routes>
              <Route exact path="/" element={<>{getSeoBlock("home")}<AppBreadcrumbs history={history}/><Homepage /></>} />
              <Route exact path="/about-us/" element={<>{getSeoBlock("about")}<AppBreadcrumbs history={history}/><AboutUsPage /></>} />
              <Route exact path="/contact-us" element={<>{getSeoBlock("contact")}<AppBreadcrumbs history={history}/><AboutUsPage /></>} />
              <Route exact path="/free-quote" element={<>{getSeoBlock("quote")}<AppBreadcrumbs history={history}/><AboutUsPage /></>} />
              <Route exact path="/loan-programs" element={<>{getSeoBlock("programs")}<AppBreadcrumbs history={history}/><LoanProgramsPage /></>} />
              <Route exact path="/loan-programs/:program" element={<>{getSeoBlock("programs")}<AppBreadcrumbs history={history}/><ProgramPage {...props}/></>} />
              <Route exact path="/resources/calculators" element={<>{getSeoBlock("calculators")}<AppBreadcrumbs history={history}/><Calculators /></>} />
              <Route exact path="/resources/glossary" element={<>{getSeoBlock("glossary")}<AppBreadcrumbs history={history}/><GlossaryPage /></>} />
              <Route exact path="/resources/checklist" element={<>{getSeoBlock("checklist")}<AppBreadcrumbs history={history}/><ChecklistPage /></>} />
            </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>People’s Mortgage Lending LLC ©2021 Created by YoungAngel</Footer>
      </Layout>
    </Router>
  );
}
