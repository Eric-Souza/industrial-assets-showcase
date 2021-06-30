import styled from 'styled-components'

export const Container = styled.div`
  .loading {
    display: flex;
    flex-direction: column;

    text-align: center;
    justify-content: center;

    margin: 300px auto;
  }

  .loading h2 {
    margin-bottom: 20px;
  }

  .card {
    display: flex;
    flex-direction: row;
    
    margin: 10px 0;

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
