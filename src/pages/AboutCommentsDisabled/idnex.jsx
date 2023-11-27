import React from "react";

function AboutCommentDisabled() {
  return (
    <section style={{ paddingTop: "60px" }}>
      <div className="container">
        <h1>Page with comments disabled</h1>
        <p>
          This static Page is set not to allow comments. Verify that the Page
          does not display a comment list, comment reply links, or comment reply
          form. Also, verify that the Page does not display a “comments are
          closed” type message. Such messages are not suitable for static Pages,
          and should only be used on blog Posts.
        </p>
      </div>
    </section>
  );
}

export default AboutCommentDisabled;
