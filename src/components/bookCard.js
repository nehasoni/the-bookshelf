import React, { Component } from 'react';
import bookLogo from '../images/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg';
import './bookCard.css';

class BookCard extends Component {
    render() {
        return (
            <div className="book-card">
                <img src={bookLogo} className="App-logo" alt="logo" />
                <div className="book-name">Wings of Fire</div>
            </div>
        )
    }
}

export default BookCard;