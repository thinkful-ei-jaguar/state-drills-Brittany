import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    static defaultProps = {
        bulletInChamber: 8
    };

    handleClick = () => {
        console.log(this.props.bulletInChamber);
        this.setState({
            spinningTheChamber: true,

        });

        setTimeout(() => {
            const randNum = Math.floor(Math.random() * 8) + 1;
            console.log(randNum);
            this.setState({
                spinningTheChamber: false,
                chamber: randNum
            });
        }, 2000);
    }

    render() {
        let content = `You're safe!`;
        if (this.state.spinningTheChamber === true) {
            content = "SPINNING THE CHAMBER..."
        } else if (this.props.bulletInChamber === this.state.chamber) {
            content = "BANG!!"
        }

        return (
            <div>
                <p>{content}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun; 