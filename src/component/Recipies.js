import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, ImgAnim, fade } from "./Animation";
const Recipies = ({
  title,
  Image,
  calories,
  label,
  healthlabel,
  ingredientLines,
  ingredients,
}) => {
  const [isVisibal, setisVisibal] = useState(false);
  const toggleHolder = () => {
    setisVisibal(!isVisibal);
  };
  return (
    <AllinOne>
      <Recipe variants={slideIn} initial="hidden" animate="show">
        <motion.img
          variants={ImgAnim}
          initial="hidden"
          animate="show"
          src={Image}
          alt=""
        />
        <RecipeDetail>
          <motion.h1 variants={fade}>{title}</motion.h1>
          <motion.p variants={fade}>
            Calories: <CaloLabel>{Math.round(calories)}</CaloLabel>
          </motion.p>
          <FlexDiv variants={fade}>
            <p>Healthy Ingredients:</p>

            {healthlabel.map((labe) => (
              <Label>{labe} </Label>
            ))}
          </FlexDiv>
          <motion.p variants={fade}>
            Label:
            {label.map((laa) => (
              <CaloLabel>{laa}</CaloLabel>
            ))}
          </motion.p>
        </RecipeDetail>
      </Recipe>

      {!isVisibal ? (
        <FlexDiv2>
          <ReadMore onClick={toggleHolder}>Read More</ReadMore>{" "}
        </FlexDiv2>
      ) : (
        ""
      )}

      <AnimateSharedLayout>
        {isVisibal ? (
          <ReadmoreDetail>
            <h3>Ingredients</h3>
            <Ingredients>
              {ingredients.map((ing) => (
                <Ingredient>
                  <img src={ing.image} alt={ing.text} />
                  <h5>{ing.text}</h5>
                  <p>
                    Weight: <CaloLabel>{Math.round(ing.weight)} </CaloLabel>
                  </p>
                </Ingredient>
              ))}
            </Ingredients>
            <h3>Process:</h3>

            <ul>
              {ingredientLines.map((line) => (
                <li>{line}</li>
              ))}
            </ul>

            <FlexDiv2>
              <ReadMore onClick={toggleHolder}>Read Less</ReadMore>
            </FlexDiv2>
          </ReadmoreDetail>
        ) : (
          ""
        )}
      </AnimateSharedLayout>
      <Line />
    </AllinOne>
  );
};
const AllinOne = styled.div`
  width: 60%;
  margin: auto;
  margin-bottom: 1rem;

  padding: 2rem;

  @media (max-width: 1300px) {
    text-align: left;
  }
`;
const Recipe = styled(motion.div)`
  font-family: "Lato", sans-serif;

  margin: 2rem 0rem;
  padding: 3rem 2rem 3rem 2rem;
  display: flex;
  img {
    border-radius: 20px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding-bottom: 0;
    margin-bottom: 0;
    padding-top: 1rem;
  }
`;
const RecipeDetail = styled.div`
  padding: 0rem 2rem;
  p {
    font-family: "Lato", sans-serif;
    font-size: 1.4rem;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
const Label = styled.div`
  background: #7ed9f5;
  border-radius: 25px;
  color: #2b2b2b;
  padding: 0.5rem;
  margin: 3px;
  width: fit-content;
  height: fit-content;

  &:hover {
    background: #2b2b2b;
    color: #7ed9f5;
  }
`;
const FlexDiv = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const FlexDiv2 = styled(FlexDiv)`
  justify-content: center;
  margin: 2rem;
  padding: 2rem;
  @media (max-width: 1300px) {
    margin: 0rem;
    padding: 0rem;
  }
`;
const CaloLabel = styled.span`
  background: #7ed9f5;
  border-radius: 25px;
  color: #2b2b2b;
  padding: 0.5rem;
  margin: 3px;
  width: fit-content;
  font-size: 0.8rem;
  &:hover {
    background: #2b2b2b;
    color: #7ed9f5;
  }
`;
const Line = styled.div`
  height: 10px;
  width: 90%;
  margin: 0rem 4rem;
  border-radius: 1rem;
  background: #e9c3a9;
`;
const ReadMore = styled.button`
  padding: 0.6rem 2rem;
  align-items: center;
  justify-content: center;
  border: 1px #ff987e solid;
  background: #f0d5c4;
`;
const ReadmoreDetail = styled.div`
  background: #e9c3a9;
  text-align: center;

  h3 {
    padding: 2rem;
    @media (max-width: 1300px) {
      padding: 0;
      margin: 0;
    }
  }
  ul {
    list-style: none;
    text-align: left;

    @media (max-width: 1300) {
      margin-left: 0rem;
    }
    li {
      padding: 1rem 0rem;
      text-transform: capitalize;
      font-weight: bold;
    }
  }
`;
const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    margin: 2rem;
  }
`;
const Ingredient = styled.div`
  margin: 1rem;
  text-transform: capitalize;
  width: 200px;
  img {
    width: 100px;
    border-radius: 25px;
  }
`;
const ingredientlines = styled.div``;
export default Recipies;
