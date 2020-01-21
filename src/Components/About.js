import React, {Component} from 'react';
import {Col, Row, Container, Alert} from 'react-bootstrap'

export class About extends Component {
  render(){
    return(
        <Container>
        <Row>
          <Col>
          <h4>ABOUT</h4>
          <p>
          Windows and Mirrors is a project dedicated to helping educators, families, and children easily find books with both reflect their life experiences and
          provide different perspectives. The name of this website - Windows and Mirrors - was inspired by the work done by Emily Styles of the Seeking 
          Educational Equity and Diversity (SEED) Project. 
          </p>
          <p>
          Emily contends that various mediums (e.g., books, movies, music, illustrations, etc.) provide children the opportunity to get a glimpse into a 
          new or different culture/life experience. Windows also help children build empathy and understanding for those who have a different 
          perspective or life experience. Alternatively, Mirrors are mediums (e.g., books, movies, music, illustrations, etc.) that reflect one’s own 
          life experience, culture, and identity. Mirrors are important for validating one’s own life experiences and allow readers to feel that their 
          own experiences are not isolated or “strange.” Mirrors are also a way for children to feel connected to their experience, culture, and 
          identity with others. 
          </p>
          <p>
          Both windows and mirrors are important for validating children as they are and expanding children’s views on people and experiences that 
          are different from their own. Windows and mirrors in children’s literature can extend to (but is not limited to): race, gender, 
          sexual orientation, family structure, socio-economic status, immigration, first generation experiences, different abilities, etc.
          </p>
          
          <h4>WHY</h4>
          <p>
          There is a wide diversity gap in children’s literature and publishing. In addition, children’s book that feature diverse perspects are often 
          written by people who do not identify with the experience or culture they are writing about - which can contribute to problematic themes and 
          depictions in children’s book when diverse perspectives are shown. Literacy researcher, Dr. Ebony Elizabeth Thomas, from the 
          University of Pennsylvania, has described this discrepancy as “ a distorted funhouse mirrors of self.” 
          </p>
          <p>
          In 2015, statistics complied by librarians at the Wisconsin-Madison-School-of-Education Cooperative Children’s Book Center(CCBC) showed that 
          73.3% of children’s books featured a white male protagonist, and 12.5% of children’s books featured non-human protagonists 
          (e.g., animals, cars, trains, etc.). First Nations peoples were represented in 0.9%, Latinx were represented in 2.4%, 
          Asian Pacific/ Asian Pacific Americans were represented in 3.3%, and African/African American children were represented in 7.6% of children’s books published that year.
          </p>
          <p>
          In 2018, updated statistics revealed that 50% of books published that year featured a white male protagonist and 27% featured non-human 
          protagonists. First Nations peoples were represented in 1%, Latinx were represented in 5%, Asian Pacific/Asian Pacific Americans were 
          represented in 7%, and African/African American children were represented in 10% of children’s books.
          </p>
          <p>
          LGBTQIA+ and Non-binary representation was not tracked in 2015, nor in 2018. Although slow progress is being made towards improved representation 
          (both in quantity and quality), children’s book overall continue to ignore diverse perspectives or showcase them in authentic or meaningful ways. 
          This presents additional time challenges and burdens  for  educators and parents to find appropriate and meaningful books to share with their 
          students and children.
          </p>
          <p>
          It is our hope that Windows and Mirrors will lesson the burden by making it easy to find diverse children’s books and also be altered to any 
          concerning or problematic themes presented in these books. 
          </p>
          <br/>
          <Alert variant="info">
            Statistics compiled by the Cooperative Children’s Book Center, School of Education, University of Wisconsin-Madison: ccbc.education.wisc.edu/books/pcstats.asp
          </Alert>
          </Col>
        </Row>
        </Container>
      
    )
  }

}
export default About