import React from "react";
import ContentC from "../components/ContentC";

// Creating a Functional Component

function ContentPage() {
  return (
    <div>
      <ContentC
        heading="Hey Students"
        Description="Welcome to  Day 1 React Course"
      />
      <ContentC heading="Day 1" Description="What is React?" />
      <ContentC
        heading="Day 2"
        Description="Javascript vs React and its working"
      />
    </div>
  );
}

export default ContentPage;
