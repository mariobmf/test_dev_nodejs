import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  gap: 1rem;
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  overflow-y: auto;

  background-color: #457B9D;
`;

export const VehiclesContainer = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  background-color: #F1FAEE;
  padding: 1rem;
  line-height: 1.5rem;
  position: relative;

  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);

  h3 {
    color: #457B9D;
    margin-bottom: 1rem;
  }

  .delete_card {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .edit_card {
    position: absolute;
    top: 1rem;
    right: 3rem;
  }
`;

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  section {
    border: 1px solid #457B9D;
    border-radius: 4px;
    padding: 0.5rem;
    margin-top: 1rem;

    h4 {
      margin-bottom: 1rem;
      color: #457B9D;
    }
  }
`;
