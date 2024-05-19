import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Background from './components/Background';
import pages from './pages';
import ErrorBoundary from './errorBoundary';

createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
        <Background />

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<pages.Home />} />
                <Route path='/download' element={<pages.Download />} />
                <Route path='/faq' element={<pages.FAQ />} />
                <Route path='/plugins' element={<pages.Plugins />} />
                <Route path='/why' element={<pages.Why />} />
                <Route path='*' element={<pages.Error title='404' description={<>uh oh, you seem a bit lost here.<br />make sure the url is the intended page.</>} />} />
            </Routes>
        </BrowserRouter>
    </ErrorBoundary>
);