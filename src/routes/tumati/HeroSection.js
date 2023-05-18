import React from 'react'
import tumatiHero from '../../assets/tumati-hero.jpeg'
import { Container, Row, Col } from 'reactstrap'
import '../../routes/tumati/heroSection.css'

function HeroSection() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero_content'>
                   <h2>Empowering the Boy-Child</h2>
                   <p>Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                    </p>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection