import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        timer: null
    };

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState(prevState => {
                    return {
                        count: prevState.count + 1
                    }
                });
            }, 1000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        let word = null;
        if (this.state.count % 2 === 0) {
            word = 'tick';
        } else if (this.state.count >= 8) {
            word = 'BOOM!';
            clearInterval(this.state.timer);
        } else {
            word = 'tock';
        };

        return (
            <div>
                <p>{word}</p>
            </div>
        )
    }
}

export default Bomb;