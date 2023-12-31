import React from "react";

function AboutComments() {
  return (
    <section className="container" style={{ paddingTop: "60px" }}>
      <h1>Page with comments</h1>
      <p>
        Repository-hosted Themes are required to support display of comments on
        static Pages as well as on single blog Posts. This static Page has
        comments, and these comments should be displayed. If the Theme includes
        a custom option to prevent static Pages from displaying comments, such
        option must be disabled (i.e. so that static Pages display comments) by
        default. Also, verify that this Page does not display taxonomy
        information (e.g. categories or tags) or time-stamp information (Page
        publish date/time).
      </p>
    </section>
  );
}

export default AboutComments;
