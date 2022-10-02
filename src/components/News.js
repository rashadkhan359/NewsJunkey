import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from 'prop-types';

export class News extends Component {
  articles = [];
  static defautProps={
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf3df58058ec4e24aa220760c95d025a&page=1&pageSize=${this.props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    data = await data.json();
    this.setState({ articles: data.articles });
  }
  handlePrev = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf3df58058ec4e24aa220760c95d025a&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    console.log(url);
    this.setState({
      page: this.state.page - 1,
      articles: data.articles
    });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cf3df58058ec4e24aa220760c95d025a&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    console.log(url);
    this.setState({
      page: this.state.page + 1,
      articles: data.articles
    });
  };
  render() {
    return (
      <>
      <h2 className={`text-center text-${this.props.mode===`light`?`dark`:`white`} mt-3`}>{(this.props.category).toUpperCase()} - Top Headlines</h2>
        <div className="container mt-3 mb-5" style={{ 'maxWidth':'1100px' }}>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                    
                  <NewsItems
                    title={(element.title?.length >= 70) ? `${element.title?.slice(0,200)}...` : element.title}
                    description={(element.description?.length >= 200) ? `${element.description?.slice(0,200)}...` : element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author = {element.author}
                    date = {element.publishedAt}
                    source = {element.source.name}
                    mode = {this.props.mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
