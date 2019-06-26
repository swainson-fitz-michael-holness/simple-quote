import React from 'react';
import './App.css';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote_body: "loading...",
      author: ""
    };
  }

  getQuote = () => {
    var num = Math.floor(Math.random() * (24 - 0 + 1)) + 0;
    $.ajax({
      url:
        "https://favqs.com/api/quotes/?filter=" +
        "life" +
        "&type=tag&page=" +
        1,
      headers: {
        Authorization: 'Token token="ef2942516afa8711bbff0c4ba1c59a0d"'
      }
    })
      .done((data) => {
        this.setState({
          quote_body: data.quotes[num].body,
          author: data.quotes[num].author

        });
      })
      .fail(function () {
        console.log("FAIL");
      });
  }

  componentDidMount() {

    $.ajax({
      url:
        "https://favqs.com/api/quotes/?filter=" +
        "life" +
        "&type=tag&page=" +
        1,
      headers: {
        Authorization: 'Token token="ef2942516afa8711bbff0c4ba1c59a0d"'
      }
    })
      .done((data) => {
        this.setState({
          quote_body: data.quotes[0].body,
          author: data.quotes[0].author

        });
        console.log(data)
      })
      .fail(function () {
        console.log("FAIL");
      });
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <p id="text">
            {this.state.quote_body}
          </p>
          <p id="author">{this.state.author}</p>
          <button className="m-btn-primary btn-custom" id="new-quote" onClick={this.getQuote}>new quote</button>
          <a className="fa fa-twitter" id="tweet-quote" href={"https://twitter.com/intent/tweet/?text=" + this.state.quote_body + "  -" + this.state.author} target="_blank" rel="noopener noreferrer" aria-label="tweet" title="tweet-quote">...</a>
        </div>
      </div>
    );
  }


}

export default App;
