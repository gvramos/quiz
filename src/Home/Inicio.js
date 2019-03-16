import React from 'react'
import {Container, Card, Button} from 'semantic-ui-react'

const Inicio = props => {
    return (
        <div>
              <Container>
                  <Card>
             <Card.Header>
                          Quiz
             </Card.Header>
                     <Card.Meta>
                              Jogo de Perguntas e Respostas
            </Card.Meta>
                          <Card.Content>
                           Desafie os seus amigos neste incrível jogo de perguntas e respostas
            </Card.Content>
                          <Card.Content>
                              <Button>Login com Facebook</Button>
                              <Button>Usuário Administrativo</Button>         
                          </Card.Content>
                          </Card>
              </Container>
        </div>
    )
}

export default Inicio;