import React, { useEffect } from "react";
import styles from "../styles/App.module.scss";
import { useSelector, useDispatch } from "react-redux";
import getQuotesAction from "../redux/actions/action.js";
import { FaQuoteLeft } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiTumblrFill } from "react-icons/ri";
import handleClick from "../events/handleClick";

function RandomQuote() {
  const quote = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const twitterHref = `http://twitter.com/share?text="${quote.content}" - ${quote.author}&hashtags=quotes`;
  const tumblrHref = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${quote.author}&content=${quote.content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  useEffect(() => {
    dispatch(getQuotesAction());
    handleClick();
  }, [dispatch]);

  return (
    <section id="quote-box" className={styles["App"]}>
      <figure id="quote-area">
        <blockquote id="text">
          <FaQuoteLeft id={styles["quote-icon"]} />
          {quote.content}
        </blockquote>
        <figcaption id="author">- {quote.author}</figcaption>
      </figure>
      <div id={styles["footer"]}>
        <div id={styles["social-area"]}>
          <a
            href={twitterHref}
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter className={styles["icons"]} />
          </a>
          <a
            href={tumblrHref}
            id="tumblr-quote"
            target="_blank"
            rel="noreferrer"
          >
            <RiTumblrFill className={styles["icons"]} />
          </a>
        </div>
        <button
          id="new-quote"
          onClick={() => {
            handleClick();
            dispatch(getQuotesAction());
          }}
        >
          New quote
        </button>
      </div>
    </section>
  );
}
export default RandomQuote;
