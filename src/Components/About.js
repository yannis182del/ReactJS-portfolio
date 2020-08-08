import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px 20px 0 20px;
  font-size: 1.2em;
`;

const About = () => {
  return (
    <>
      <hr className="style-eight" />
      <Container>
        <p>
          Hello! My name is Yannis and i'm a software developer based in
          Stockholm.
        </p>
        <p>
          I recently graduated from School Of Applied Technology Bootcamp and
          learned a lot about the MERN stack.
        </p>
        <p>
          Outside of coding i love traveling, photography, videography and
          Blockchain Technology.
        </p>
        <p>
          I'm originally from Antibes, south of France and moved to Stockholm
          January 2014.
        </p>
      </Container>
    </>
  );
};

export default About;
