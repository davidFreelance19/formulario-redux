import styled from "@emotion/styled"
const HeadingText = styled.h1`
  font-size: 2.3rem;
  color: hsl(213, 96%, 18%);
  margin-bottom: 4px;
`
const HeadingInfo = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 17px;
  margin-bottom: 1.2rem;
`
const Heading = ({ heading, headingInfo }) => {
  return (
    <>
      <HeadingText>{heading}</HeadingText>
      <HeadingInfo>{headingInfo}</HeadingInfo>
    </>
  )
}

export default Heading
