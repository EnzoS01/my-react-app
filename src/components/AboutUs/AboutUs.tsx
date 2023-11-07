import { Card } from "react-bootstrap"


const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>
      <div className='row'>
        <div className="col-md-4 col-12">
          <Card>
            <Card.Img className='' src="" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12">
          <Card>
            <Card.Body> 
            <Card.Img className='' src="" />
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default AboutUs