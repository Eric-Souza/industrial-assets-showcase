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
    max-width: 500px;
    max-height: 400px;
  }

  .companyName {
    text-transform: lowercase;
  }
`
