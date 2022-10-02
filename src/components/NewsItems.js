import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, mode } = this.props;
    return (
      <div className={`card my-2 text-${mode===`light`?`black`:`white`} bg-${mode===`light`?`light`:`dark`}`} style={{ height: "31rem", position:"relative" }}>
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
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{'left': '50%', 'zIndex':'1'}}>{source}</span>
          <h5 className="card-title fs-5 fw-bold" style={{'textAlign':'justify'}}>{title}</h5>
          <p className="card-text fs-7" style={{'textAlign':'justify'}}>{description}</p>
          <p className="card-text">
            <small style={{'fontSize':'12px', position:'absolute', top:'35.6em'}}><i>By- {!author?"Unknown":author} on {new Date(date).toGMTString()}</i></small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" style={{ position:"absolute", top:'32em', left:'1em' }}>
            Read more
          </a>
        </div>
      </div>
    );
  }
}
