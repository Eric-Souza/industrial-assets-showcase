import styled from 'styled-components'

export const Container = styled.div`
  margin: 30px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: row;
    
    margin: 15px 0;

    max-width: 100%;
  }

  .card img {
    max-width: 550px;
    max-height: 450px;
  }
`

export const CardData = styled.div`
  .lowercaseName {
    text-transform: lowercase;
  }

  div {
    margin-top: 2px;
  }

  .chart {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    width: 400px;
    max-height: 300px;

    margin-right: 70px;
  }
`
