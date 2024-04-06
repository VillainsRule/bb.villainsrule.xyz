import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from './pages';
import { ErrorBoundary } from './errorBoundary';

createRoot(document.getElementById('root')).render(
    <ErrorBoundary>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<pages.Home />} />
                <Route path='/download' element={<pages.Download />} />
                <Route path='/faq' element={<pages.FAQ />} />
                <Route path='/plugins' element={<pages.Plugins />} />
                <Route path='*' element={<pages.Error title='404' description={'well, you\'re lost. find your way back to the right link, how about.'} />} />
            </Routes>
        </BrowserRouter>
    </ErrorBoundary>
);