import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "derrek.lee@futurenet.com (Derrek Lee)",
      title:
        "Android 13 is still very new, but we're already talking about Android 14",
      description:
        "Android 14 is likely already in the works, and a new report provides a look into some of the features we can expect for the next major update.",
      url: "https://www.androidcentral.com/apps-software/android-14-early-deep-dive-expected-features",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/r8qBJtWbXaH8yFjMSEteGc-1200-80.jpg",
      publishedAt: "2022-10-01T00:21:24Z",
      content:
        "<ul><li>A new report highlights some features expected to arrive in Android 14.</li><li>Among the features are is the predictive back gesture, satellite connectivity, and support for AV1 decoding.</l… [+3228 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Tom Hunt",
      title:
        "How to turn spent citrus peel into a bartender’s secret ingredient – recipe | Waste not",
      description:
        "Save your citrus peel and macerate with sugar to create an ‘oil syrup’ to use as a classic flavouring in cocktails and punchesOleo saccharum is a citrus syrup used in bartending, and is made by macerating citrus peel with sugar. Although it’s easy to make, it…",
      url: "https://amp.theguardian.com/food/2022/oct/01/how-to-turn-spent-citrus-peel-into-a-bartenders-secret-ingredient-recipe-zero-waste-cooking",
      urlToImage:
        "https://i.guim.co.uk/img/media/d4ac81146aad7edaa8cb20443722fe758f76b27b/0_135_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cce4a4431053ef37c4749d512aef8710",
      publishedAt: "2022-10-01T05:00:59Z",
      content:
        "Oleo saccharum is a citrus syrup used in bartending, and is made by macerating citrus peel with sugar. Although its easy to make, it has a complex flavour profile that works brilliantly in all manner… [+1885 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "tmohamed@businessinsider.com (Theron Mohamed)",
      title:
        "Warren Buffett's Berkshire Hathaway has seen $32 billion wiped off its Apple stake this year - $1 billion more than it spent on the iPhone maker's shares",
      description:
        "Berkshire's Apple stake has plunged in value from $161 billion to $129 billion, reflecting a wider market slump and worries about iPhone demand.",
      url: "https://markets.businessinsider.com/news/stocks/warren-buffett-berkshire-hathaway-32-billion-apple-tech-stock-market-2022-9",
      urlToImage:
        "https://i.insider.com/5f3e4d34cdf25a001e84e5b0?width=1200&format=jpeg",
      publishedAt: "2022-10-01T09:00:00Z",
      content:
        "Warren Buffett's Berkshire Hathaway has seen $32 billion wiped off the value of its Apple stake this year, or about $1 billion more than it spent on the iPhone maker's shares.\r\nThe famed investor's c… [+1702 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "stabahriti@insider.com (Sam Tabahriti)",
      title:
        "I've had the new iPhone 14 for 2 weeks. I should've listened to Steve Jobs' daughter because I now regret buying it.",
      description:
        "Every year I try to convince myself I won't give in and buy the latest iPhone, but I keep failing and I'm even more annoyed with myself this time.",
      url: "https://www.businessinsider.com/steve-jobs-daughter-was-right-regret-iphone-14-pro-max-2022-9",
      urlToImage:
        "https://i.insider.com/63343a739ac0610018e80209?width=1200&format=jpeg",
      publishedAt: "2022-10-01T08:00:00Z",
      content:
        "For the past decade or so, I've been one of Apple's best customers. I've bought every new iPhone since I made the switch from a BlackBerry to the iPhone 4S.\r\nThis year has been no exception. I bought… [+2927 chars]",
    },
    {
      source: {
        id: null,
        name: "Daringfireball.net",
      },
      author: "John Gruber",
      title: "The Talk Show: ‘Double-Digit Domains’",
      description: null,
      url: "https://daringfireball.net/thetalkshow/2022/09/30/ep-358",
      urlToImage: null,
      publishedAt: "2022-10-01T00:31:52Z",
      content:
        "Paul Kafasis returns to the show to talk about the iPhone 14 Pro, Apple Watch Ultra, AirPods Pro, and Rogue Amoebas 20th anniversary.\r\nDownload audio.\r\nSponsored by:\r\n<ul><li>Linode: Instantly deploy… [+549 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf3df58058ec4e24aa220760c95d025a";
    let data = await fetch(url);
    data = await data.json();
    this.setState({ articles: data.articles });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItems
                  title={element.title?.slice(0, 40)}
                  description={element.description?.slice(0, 100)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
