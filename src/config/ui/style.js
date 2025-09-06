import styled from "@emotion/styled";

export const Search = styled.div`
  border: 1px solid;
  width: 100%;
  max-width: 610px;

  @media (max-width: 900px) {
    max-width: 400px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
export const Text = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 125%;
color: #999;
`

export const Buttons = styled.button`
font-weight: 400;
font-size: 16px;
line-height: 100%;
text-align: center;
color: #999;
border: none;
width: 100px;
background-color: #fff;
display: flex; align-items: center;
gap: 10px;
`