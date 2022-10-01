import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "12rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}
