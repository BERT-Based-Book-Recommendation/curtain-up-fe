import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import IntroductionIndexPage from "./pages/IntroductionIndexPage";
import BookRecommendIndexPage from "./pages/BookRecommendIndexPage";
import RecommendListIndexPage from "./pages/RecommendListIndexPage";
import ContactServiceIndexPage from "./pages/ContactServiceIndexPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroductionIndexPage />
      <BookRecommendIndexPage />
      <RecommendListIndexPage />
      <ContactServiceIndexPage />
      <Footer />
    </>
  );
}

export default App;
