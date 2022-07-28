import React from "react";

const CalltoActionSection = () => {
  return (
    <div>
      <div>
        <h5>DO You Need More Tips</h5>
        <p>Sign up free and get the latest tips</p>
      </div>
      <form>
        <input placeholder="Your Email" type="email" className="border" />
        <input value="Yes I want" type="submit" />
      </form>
    </div>
  );
};

export default CalltoActionSection;
