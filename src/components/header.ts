import styled from "styled-components";

export const HeaderWrapperStyle = styled.header`
  position: sticky;
  width: 100%;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const HeaderMenusWrapperStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HeaderMenuStyle = styled.li`
  padding: 15px 20px;
  cursor: pointer;
`;