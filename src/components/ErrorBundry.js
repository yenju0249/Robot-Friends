import { Component } from 'react';

class ErrorBundry extends Component {
    constructor(props) {
        super(props); //this is not allowed before super
        this.state = {
            hasError: false
        }
    };

    // react lifecycle, can cath error
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>We're sorry for the Error, will fix it soon......or maybe not.</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBundry;