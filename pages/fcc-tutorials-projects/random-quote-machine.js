import React from "react";
import axios from "axios";

const appStyle = {
  border: "solid 1px #777",
  borderRadius: "10px",
  padding: "2em"
};

const buttonDefault = {
  alignSelf: "flex-end",
  fontSize: "1em",
  color: "#EAE6E5",
  backgroundColor: "#12130F",
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer"
};

const buttonHover = {
  ...buttonDefault,
  color: "#12130F"
};

const authStyle = {
  alignSelf: "flex-end",
  color: "#777",
  fontSize: "1.2em",
  fontWeight: "800"
};

const quoteStyle = {
  fontSize: "1.8em"
};

// Quotes and authors
const quotes = [
  {
    quote: "Suffer the pain of discipline, or the pain of regret.",
    author: "Batman"
  },
  {
    quote: "The greatest teacher, failure is.",
    author: "Yoda"
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote:
      "If you're not prepared to be wrong, you'll never come up with anything original.",
    author: "Ken Robinson"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "Failures are finger posts on the road to achievement.",
    author: "C. S. Lewis"
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn"
  },
  {
    quote: "I have one power: I never give up.",
    author: "Batman"
  },
  {
    quote: "Perfect is the enemy of good.",
    author: "Voltaire"
  },
  {
    quote: "I'm still learning.",
    author: "Michelangelo"
  },
  {
    quote: "Be curious, not judgmental.",
    author: "Walt Whitman"
  },
  {
    quote: "Be stubborn about your goals and flexible about your methods.",
    author: "Unknown"
  },
  {
    quote: "Anyone who stops learning is old, whether at twenty or eighty.",
    author: "Henry Ford"
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin"
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Ghandi"
  }
];

// Random colors;
const colors = [
  "#FFD9CE",
  "#F7F9F9",
  "#E0D0C1",
  "#C6D8FF",
  "#CABAC8",
  "#F0E7D8",
  "#86BBD8",
  "#DAF7DC",
  "#F1F7ED",
  "#FFCCC9",
  "#8EF9F3",
  "#E9E3B4"
];

const colorsDark = [
  "#DB5461",
  "#2081C3",
  "#601700",
  "#4C1036",
  "#4CB5AE",
  "#A63A50",
  "#2F4858",
  "#336699",
  "#54494B",
  "#FF5666",
  "#171738",
  "#3E6990"
];

const QuoteBox = (props) => {
  let quoteColor = {
    ...quoteStyle,
    color: props.colorDark
  };

  return (
    <div style={quoteColor} id="text">
      <span>&ldquo;</span>
      {props.newQuote ? props.newQuote : props.text}
      <span>&rdquo;</span>
    </div>
  );
};

const Author = (props) => {
  let authColor = {
    ...authStyle,
    color: props.colorDark
  };

  return (
    <div style={authColor} id="author">
      — {props.newAuthor ? props.newAuthor : props.author}
    </div>
  );
};

const randomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const Twitter = (props) => {
  const formatted =
    "https://www.twitter.com/intent/tweet?hashtags=quotes&text=%22" +
    props.quote.replace(" ", "%20") +
    "%22%20—" +
    props.author.replace(" ", "%20");

  return (
    <a
      id="tweet-quote"
      target="_blank"
      title="Tweet this quote!"
      href={formatted}
    >
      <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
    </a>
  );
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState((prevState) => {
      return {
        hover: !prevState.hover
      };
    });
  }

  render() {
    let buttonStyle;

    this.state.hover
      ? (buttonStyle = buttonDefault)
      : (buttonStyle = {
        ...buttonHover,
        backgroundColor: this.props.color,
        borderColor: this.props.color
      })

    return (
      <button
        id="new-quote"
        style={buttonStyle}
        onClick={this.props.getQuote}
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
        target="_blank"
      >
        {this.props.children}
      </button>
    );
  }
}

class RandomMachine extends React.Component {
  constructor(props) {
    super(props);

    // Random number for initial states
    let initQuote = randomNumber(quotes);
    let initColor = randomNumber(colors);
    let initDarkColor = randomNumber(colorsDark);

    this.state = {
      text: quotes[initQuote].quote,
      author: quotes[initQuote].author,
      color: colors[initColor],
      colorDark: colorsDark[initDarkColor],
      isFetching: false
    };
  }

  componentDidMount = () => {
    axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => {
        const fetchedQuotes = res.data.quotes
        this.setState({
          fetchedQuotes
        })
      })
  };

  handleClick() {
    const { fetchedQuotes } = this.state;
    const randQuote = randomNumber(quotes);
    const randColor = randomNumber(colors);
    const randDarkColor = randomNumber(colorsDark);
    const randQ = randomNumber(fetchedQuotes);

    this.setState((prevState) => ({
      text: quotes[randQuote].quote,
      author: quotes[randQuote].author,
      color: colors[randColor],
      colorDark: colorsDark[randDarkColor],
      newQuote: fetchedQuotes[randQ].quote,
      newAuthor: fetchedQuotes[randQ].author
    }));
  }

  render() {
    let appBorder = {
      ...appStyle,
      borderColor: this.state.colorDark
    }

    return (
      <Button
        style={appBorder}
        id="quote-box"
        getQuote={() => this.handleClick()}
        color={this.state.color}
      >
        {/* <div id="buttons">
          <Twitter quote={this.state.text} author={this.state.author} />
          <Button
            getQuote={() => this.handleClick()}
            color={this.state.color}
          />
        </div> */}
        <div id="quote-author">
          <QuoteBox text={this.state.text} newQuote={this.state.newQuote} colorDark={this.state.colorDark} />
          <Author author={this.state.author} newAuthor={this.state.newAuthor} colorDark={this.state.colorDark} />
        </div>
      </Button>
    );
  }
}

export default RandomMachine;