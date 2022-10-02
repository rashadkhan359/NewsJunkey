import React, { Component } from "react";

export default class NewNewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div class="card text-bg-dark">
        <img
          src={
            !imageUrl
              ? "https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg"
              : imageUrl
          }
          class="card-img"
          alt="..."
          style={{ height: "12rem" }}
        />
        <div class="card-img-overlay">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}
