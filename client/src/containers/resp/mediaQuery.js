import * as React from "react";


// renderless component to decide which components to render 
class MediaQuery extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isMobile: false,
                lowerLimit: false,
                screenSize: window.innerWidth,                   
                upperLimit: false,           
            };
            this.updatePredicate = this.updatePredicate.bind(this);
        }
        componentDidMount() {
            this.updatePredicate();
            window.addEventListener("resize", this.updatePredicate);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.updatePredicate);
        }

        updatePredicate() {
            const ww = window.innerWidth;
            this.setState({
                lowerLimit: this.props.lowerLimit !== undefined ? this.props.lowerLimit > ww : false,
                screenSize: ww,
                upperLimit: this.props.upperLimit !== undefined ? this.props.upperLimit < ww : false,
            });
        }

        render() {
            return (
                // if not at the upper or lower bounds of the query, render children
                !this.state.lowerLimit && !this.state.upperLimit ?
                this.props.children :
                null
            )              
        }
    }


export default MediaQuery;