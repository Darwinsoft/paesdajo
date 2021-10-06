import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}