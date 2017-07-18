"use strict"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../../actions/booksActions'
import { Grid, Col, Row, Button, Carousel } from 'react-bootstrap'
import BookItem from './bookItem'
import Cart from './cart'


class BooksList extends Component{
    componentDidMount(){
        this.props.getBooks();
    }
    render(){
        const booksList = this.props.books.map(function (booksArr) {
            return(
                <Col xs={12} sm={6} md={4} key={booksArr._id}>
                    <BookItem
                        _id={booksArr._id}
                        title={booksArr.title}
                        description={booksArr.description}
                        images={booksArr.images}
                        price={booksArr.price}
                    />

                </Col>
            )
        });
        return(
            <Grid>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img width={1200} height={300} alt="1200x300" src="/images/home1.jpg"/>
                            <Carousel.Caption>
                                <h3>Welcome to Pan's Book Store</h3>
                                <p>My react redux node.js mongoDB practice project</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1200} height={300} alt="1200x300" src="/images/home2.jpg"/>
                            <Carousel.Caption>
                                <h3>Welcome to Pan's Book Store</h3>
                                <p>My react redux node.js mongoDB practice project</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row style={{marginTop:'15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state) {
    return{
        books: state.books.books
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks,
    }, dispatch)
}
export default connect( mapStateToProps, mapDispatchToProps)(BooksList);
