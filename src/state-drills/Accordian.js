import React from 'react';

import './Accordian.css';

class Accordian extends React.Component {
    state = {
        shown: null
    };

    static defaultProps = {
        sections: []
    }

    handleClick = index => {
        this.setState({
            shown: index
        })
    }
    render() {
        return (
            <ul>
                {this.props.sections.map((section, index) => {
                    return (
                        <li key={index}><button onClick={() => this.handleClick(index)}>{section.title}</button>
                            {this.state.shown === index ? <p>{section.content}</p> : null}
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Accordian; 