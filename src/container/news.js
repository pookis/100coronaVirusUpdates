import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions/index';
import { formatDistance } from 'date-fns';

import './news.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.articles = [];
    }

    componentDidMount() {
        this.props.getNews();
    }




    render() {
        return (
            <div className='news-container'>
                {
                    this.props.news.map((newsItem) => {
                        return (
                            newsItem.articles.map((item, i) => {
                                return (
                                    <a href={item.url}>
                                        <article key={i} className='news-card'>

                                            <div className='news-card_content'>
                                                <div className="news-card_meta">
                                                    <p>{`${item.source.name} -  ${formatDistance(item.publishedAt, new Date())} ago`}</p>
                                                </div>
                                                <h2 className="news-card_title">{item.title}</h2>
                                                <p className="news-card_description">{item.description + "..."}</p>
                                            </div>
                                        </article>
                                    </a>
                                );
                            })
                        )
                    })
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        news: state.news
    };
}


export default connect(mapStateToProps, { getNews })(News);