import React from 'react'

import { Container } from './styles'

const Footer: React.FC = () => (
  <Container>
    <span>Desenvolvido por Eric Souza</span>

    <span>
      Sinta-se à vontade para ver meu
      {' '}
      <a href="https://www.linkedin.com/in/eric-de-oliveira-souza-0157b618b/?locale=en_US">Linkedin</a>
      {' '}
      e
      {' '}
      <a href="https://github.com/Eric-Souza">Github</a>
    </span>
  </Container>
)

export default Footer
