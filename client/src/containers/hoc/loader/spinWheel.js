import * as React from "react";

import './style.css';

// makes spinner appear until page is finished fetching any data it requires
const Loader = (WrappedComponent) => {
    return class LoaderHOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: this.props.loading,
            }
            this.componentWillReceiveProps = (nextProps) => {
                this.setState({ loading: nextProps.loading })
            }
        }

        render() {
            return (
                this.state.loading ?
                <div id='first'><div className="Loader">loading...<div /><div /><div /><div /><div /><div /><div /><div /></div></div> :
                <WrappedComponent  {...this.state} {...this.props} />

            )
        }
    }
}

export default Loader;