import React, { useEffect, useState } from "react";
import "../css/Project.css";
import axios from "axios";
import styled from "styled-components";
import Star from "../Components/common/Icons/Star";
import Fork from "../Components/common/Icons/Fork";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const CardContainer = styled.div`
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 4rem;
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  width: 100%;
  padding: 8px 8px;
  float: left;
`;

const Row = styled.div`
  display: row;
`;

const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  background-color: white;
`;

const ElementsDiv = styled.div`
  display: flex;
  width: 15%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Description = styled.p`
  color: rgb(112, 112, 112);
`;

const Card = ({ repo, stars, forks, description, url }) => {
  return (
    <Row>
      <Column>
        <MainCard>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {" "}
            <h3>{repo}</h3>
          </a>

          <Description>{description}</Description>
          <div style={{ display: "flex" }}>
            <ElementsDiv>
              <Fork color="black" />
              <p style={{ marginRight: "10px" }}>{forks}</p>
            </ElementsDiv>
            <ElementsDiv>
              <Star color="black" />
              <p>{stars}</p>
            </ElementsDiv>
          </div>
        </MainCard>
      </Column>
    </Row>
  );
};

const Projects = () => {
  const [github, setGitHub] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/etherean06/repos "
      );
      setGitHub(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Container>
      <CardContainer>
        {console.log(github)}
        {github
          .filter((data) => !data.fork)
          .map((data) => (
            <Card
              key={data.id}
              repo={data.name}
              forks={data.forks}
              stars={data.stargazers_count}
              description={data.description}
              url={data.html_url}
            />
          ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
