import React from "react";
import PockemonCard from "./components/PockemonCard";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <SearchBar />
      <CardSpace>
        <PockemonCard />
      </CardSpace>
    </div>
  );
};

export default Layout;

const CardSpace = styled.div`
  padding: 1rem;
  background-color: darkred;
`;
