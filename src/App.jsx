import React from 'react'
import './App.css'
import HomePag from './components/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom';
import GetApp from './components/getapp/GetApp';
import Contact from './components/contact/Contact';
import Listen from './components/listenpage/Listen';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <>
    <QueryClientProvider client={queryClient}>
      
      <Routes>
      <Route path="/" element={<HomePag />} />
      <Route path="/listen" element={<Listen />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/getapp" element={<GetApp />} />
      
      </Routes>
      
    </QueryClientProvider>
    </>
  );
}

export default App
