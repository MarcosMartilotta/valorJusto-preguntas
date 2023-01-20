import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const StadtisticsPage = () => {
  return (
    <StyledSection>
      <iframe
        title="Reporte inicial propiedades"
        width="1024"
        height="612"
        src="https://app.powerbi.com/view?r=eyJrIjoiOTI5NDI1ZjItMGVjZi00OGU3LTk3ZGUtNTgwMThlNzkzYmU2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </StyledSection>
  );
};

export default StadtisticsPage;
