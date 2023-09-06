import axios from 'axios';
import {React ,useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function AddStudent() {
    const [id, setId] = useState(0)
  const [name, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [courses, setPosition] = useState("")
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [dob, setDob] = useState("")
  const [place, setPlace] = useState("")
  const [pin, setPin] = useState("")
  const [phoneno, setPhoneno] = useState("")
  const [email, setEmail] = useState("")


    const location=useNavigate()
  

    const addStudent = async(e) => {
        e.preventDefault() //automatic run stoped 
        setId(uuid().slice(0,3));
        const body = {
          id,
          sname:name,
          courses,
          age,
          gender,
          address,
          dob,
          place,
          pin,
          phoneno,
          email,
        //   image
        
        }
        console.log(body);
        // api request
       
          const result = await axios.post('http://localhost:8000/addStudent',body)
          console.log(result);
          alert(result.data.message)
          location('/student')
      }
      useEffect(() => {
        // uuid()
        // setId(uuid().slice(0,4))
      }, [])

    return (
        <div>
            <div className='text-center'><h2 className='addStaffheader'> New Student </h2></div>
            <Form className='addStaffForm p-3'>
                <Row className="mb-3">
                    <Form.Group controlId="formGridEmail">
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Name</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setUname(e.target.value)} type="text" placeholder="Name" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>age</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control type="text" onChange={(e) => setAge(e.target.value)} placeholder="age" /></div>
                        </div>
                    </Form.Group>
                   
                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Cource</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-3'><Form.Select onChange={(e) => setPosition(e.target.value)} size="sm">
                            <option></option>
                            <option>MEARN</option>
                            <option>MERN</option>
                            <option>FLUTTER</option>
                            <option></option>
      </Form.Select></div>
                        </div>
                    </Form.Group>

                    
        <Form.Group  className="mt-3">
          <div className='row' >
              <div className='col-3 mt-1'>
                  <Form.Label as="legend" column >
                    Gender
                  </Form.Label>
              </div>
              <span className='col-1 text-end mt-1'> : </span>
              <div className='col-7 mt-1'>
                  <Col sm={7}>
                    <Form.Check onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      value="male"
                      label="male"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      value="female"
                      label="female"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      value="other"
                      label="other"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
              </div>
          </div>
        </Form.Group>

        <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Address</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control  onChange={(e) => setAddress(e.target.value)} as="textarea" aria-label="With textarea" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Date of birth</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setDob(e.target.value)} type="date" placeholder="" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Place</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setPlace(e.target.value)} type="text" placeholder="place" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Pin</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setPin(e.target.value)} type="text" placeholder="pin code" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Phone No</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setPhoneno(e.target.value)} type="text" placeholder="number" /></div>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Email</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control onChange={(e) => setEmail(e.target.value)} type="mail" placeholder="mail" /></div>
                        </div>
                    </Form.Group>

                    {/* <Form.Group controlId="formGridEmail" className='mt-3'>
                        <div className='row'>
                            <div className='col-3 mt-1'><Form.Label>Image</Form.Label></div>
                            <span className='col-1 text-end mt-1'> : </span>
                            <div className='col-7'><Form.Control  onChange={(e) => setImage(e.target.value)}
              type="file"
              required
              name="file"
              onChange={handleChange}
              isInvalid={!!errors.file}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
</div>
                        </div>
                    </Form.Group> */}
                   
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <div className='text-center mb-1 mt-2'>
                    <Button onClick={(e) => addStudent(e)} variant="primary" type="submit" className='p-2 ps-4 pe-4'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}


export default AddStudent