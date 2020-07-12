import React, { useEffect, useState } from "react";
import axios from "axios";
import Star from "../common/Icons/Star";
import Fork from "../common/Icons/Fork";
import "../../css/Project.css";

import {
  Container,
  CardContainer,
  Column,
  Row,
  MainCard,
  ElementsDiv,
  Description,
  Title,
} from "./style";

const Card = ({ repo, stars, forks, description, url }) => {
  return (
    <Row>
      <Column>
        <MainCard>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <Title>{repo}</Title>
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
    const url = "https://api.github.com/users/etherean06/repos ";
    try {
      const response = await axios.get(url);
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
