import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import EDUOverview from './pages/edu/EDUOverview';
import Courses from './pages/edu/Courses';
import Projects from './pages/edu/Projects';
import Mentors from './pages/edu/Mentors';
import EDUFAQ from './pages/edu/EDUFAQ';
import ResearchParkOverview from './pages/research/ResearchParkOverview';
import ResearchProjects from './pages/research/ResearchProjects';
import Collaborate from './pages/research/Collaborate';
import ITSolutionsOverview from './pages/it/ITSolutionsOverview';
import ProductsServices from './pages/it/ProductsServices';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edu" element={<EDUOverview />} />
          <Route path="/edu/courses" element={<Courses />} />
          <Route path="/edu/projects" element={<Projects />} />
          <Route path="/edu/mentors" element={<Mentors />} />
          <Route path="/edu/faq" element={<EDUFAQ />} />
          <Route path="/research" element={<ResearchParkOverview />} />
          <Route path="/research/projects" element={<ResearchProjects />} />
          <Route path="/research/collaborate" element={<Collaborate />} />
          <Route path="/it-solutions" element={<ITSolutionsOverview />} />
          <Route path="/it-solutions/products" element={<ProductsServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;