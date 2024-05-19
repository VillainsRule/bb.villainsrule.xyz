import React from 'react';
import pages from './pages';

export default class ErrorBoundary extends React.Component {
    state = { error: '' };

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        console.error(error, errorInfo);
    };

    render() {
        if (this.state.error !== '')
            return <pages.Error title='build error' description={<>something went wrong on our end.<br />contact us and let us know!</>} />;
        return this.props.children;
    };
}