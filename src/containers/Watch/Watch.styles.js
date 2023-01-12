import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const VideoContainer = styled.div`
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.base.navBg};
`;

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 3rem;
`;

export const EpisodesContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;