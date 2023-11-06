import React from "react";
import { Form, Row, Col, Input, Button, FormGroup, FormFeedback, Label, Alert, Spinner } from "reactstrap";

function ScheduleForm () {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [surgeryDate, setSurgeryDate] = React.useState('');
    const [contactMethod, setContactMethod] = React.useState('');
    const [medicalProblems, setMedicalProblems] = React.useState('');
    const [procedure, setProcedure] = React.useState('');
    const [howHeard, setHowHeard] = React.useState('');
    const [reachTime, setReachTime] = React.useState('');
    const [howAssist, setHowAssist] = React.useState('');
    const [monthlyEmails, setMonthlyEmails] = React.useState(false);

    const [firstnameVal, setFirstnameVal] = React.useState(true);
    const [lastnameVal, setLastnameVal] = React.useState(true);
    const [phoneVal, setPhoneVal] = React.useState(true);
    const [emailVal, setEmailVal] = React.useState(true);
    const [weightVal, setWeightVal] = React.useState(true);
    const [heightVal, setHeightVal] = React.useState(true);
    const [surgeryDateVal, setSurgeryDateVal] = React.useState(true);
    const [contactMethodVal, setContactMethodVal] = React.useState(true);

    const [validation, setValidation] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [spinnerOpen, setSpinnerOpen] = React.useState(false);

    React.useEffect(() => {
        if (validation) {
            handleValidSubmit();
            setValidation(false);
        }
    }, [validation]); // eslint-disable-line react-hooks/exhaustive-deps
    
    React.useEffect(() => {
        let timeout;
        if (success) {
            timeout = setTimeout(() => { setSuccess(false) }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [success]);

    React.useEffect(() => {
        let timeout;
        if (failed) {
            timeout = setTimeout(() => { setFailed(false) }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [failed]);

    const clearInputs = () => {
        setFirstname('');
        setLastname('');
        setPhone('');
        setEmail('');
        setHeight('');
        setWeight('');
        setSurgeryDate('');
        setContactMethod('');
        setMedicalProblems('');
        setProcedure('');
        setHowHeard('');
        setReachTime('');
        setHowAssist('');
        setMonthlyEmails(false);
    }

    const handleValidSubmit = () => {
        const formData = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            height: height,
            weight: weight,
            surgeryDate: surgeryDate,
            contactMethod: contactMethod,
            medicalProblems: medicalProblems,
            procedure: procedure,
            howHeard: howHeard,
            reachTime: reachTime,
            howAssist: howAssist,
            monthlyEmails: monthlyEmails
        }

        alert(JSON.stringify(formData));
        clearInputs();
        setSuccess(true);
        setSpinnerOpen(false);

    }

    const isFormValid = () => {
        let firstnameTemp = false;
        let lastnameTemp = false;
        let phoneTemp = false;
        let emailTemp = false;
        let heightTemp = false;
        let weightTemp = false;
        let surgeryDateTemp = false;
        let contactMethodTemp = false;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isNumberRegex = /^\d+$/;

        if (firstname.length > 0) {
            firstnameTemp = true;
            setFirstnameVal(true);
        } else { setFirstnameVal(false); }

        if (lastname.length > 0) {
            lastnameTemp = true;
            setLastnameVal(true);
        } else { setLastnameVal(false); }

        if (phone.length > 6) {
            phoneTemp = true;
            setPhoneVal(true);
        } else { setPhoneVal(false); }

        if (emailRegex.test(email)) {
            emailTemp = true;
            setEmailVal(true);
        } else { setEmailVal(false); }

        if (isNumberRegex.test(height)) {
            heightTemp = true;
            setHeightVal(true);
        } else { setHeightVal(false); }

        if (isNumberRegex.test(weight)) {
            weightTemp = true;
            setWeightVal(true);
        } else { setWeightVal(false); }

        if (surgeryDate.length > 0) {
            surgeryDateTemp = true;
            setSurgeryDateVal(true);
        } else { setSurgeryDateVal(false); }

        if (contactMethod.length > 0) {
            contactMethodTemp = true;
            setContactMethodVal(true);
        } else { setContactMethodVal(false); }

        return (firstnameTemp && lastnameTemp && phoneTemp && emailTemp && heightTemp && weightTemp && surgeryDateTemp && contactMethodTemp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            setSpinnerOpen(true);
            setValidation(true);
        } else {
            setValidation(false);
        }
    }

    return(
        <Form noValidate id="schedule-form" onSubmit={handleSubmit}>
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        id="schedule-form-firstname"                        
                        type="text"
                        placeholder="First name *"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        onClick={() => setFirstnameVal(true)}
                        invalid={firstnameVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a firstname
                    </FormFeedback>
                </Col>
                <Col>
                    <Input 
                        id="schedule-form-lastname"
                        type="text"
                        placeholder="Last name *"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        onClick={() => setLastnameVal(true)}
                        invalid={lastnameVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a lastname
                    </FormFeedback>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input 
                        id="schedule-form-phone"
                        type="text"
                        placeholder="Phone number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onClick={() => setPhoneVal(true)}
                        invalid={phoneVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a valid phone
                    </FormFeedback>
                </Col>
                <Col>
                    <Input
                        id="schedule-form-email" 
                        type="text"
                        placeholder="Email address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onClick={() => setEmailVal(true)}
                        invalid={emailVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a valid email
                    </FormFeedback>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        id="schedule-form-height"
                        type="text"
                        placeholder="Height (inches) *"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        onClick={() => setHeightVal(true)}
                        invalid={heightVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a valid height
                    </FormFeedback>
                </Col>            
                <Col>
                    <Input
                        id="schedule-form-weight"
                        type="text"
                        placeholder="Weight (pounds) *"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        onClick={() => setWeightVal(true)}
                        invalid={weightVal === false}
                        required
                    />
                    <FormFeedback>
                        Please provide a valid weight
                    </FormFeedback>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        id="schedule-form-surgery-date"
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setSurgeryDate(e.target.value)}
                        onClick={() => setSurgeryDateVal(true)}
                        invalid={surgeryDateVal === false}
                        required
                    >
                        <option value={'default'} disabled>When do you plan on having surgery? *</option>
                        <option>1-2 months</option>
                        <option>&gt; 2 months</option>
                    </Input>
                    <FormFeedback>
                        Please select an option
                    </FormFeedback>
                </Col>
                <Col>
                    <Input
                        id="schedule-form-contact-method" 
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setContactMethod(e.target.value)}
                        onClick={() => setContactMethodVal(true)}
                        invalid={contactMethodVal === false}
                        required
                    >
                        <option value={'default'} disabled>Preferred method of contact *</option>
                        <option>Email</option>
                        <option>Phone</option>
                    </Input>
                    <FormFeedback>
                        Please select a method
                    </FormFeedback>
                </Col>
            </Row>  
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        id="schedule-form-medical-problems" 
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setMedicalProblems(e.target.value)}
                    >
                        <option value={'default'} disabled>Do you have any medical problems?</option>
                        <option>No</option>
                        <option>Yes</option>
                    </Input>
                </Col>
                <Col>
                    <Input
                        id="schedule-form-procedure"
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setProcedure(e.target.value)}
                    >
                        <option value={'default'} disabled>Procedure of interest</option>
                        <option value="Botox">Botox</option>
                        <option value="Brazilian Butt Lift">Brazilian Butt Lift</option>
                        <option value="Breast Augmentation">Breast Augmentation</option>
                        <option value="Breast Lift">Breast Lift</option>
                        <option value="Breast Reduction">Breast Reduction</option>
                        <option value="Chemical Peels">Chemical Peels</option>
                        <option value="Injectables and Fillers">Injectables and Fillers</option>
                        <option value="Labiaplasty">Labiaplasty</option>
                        <option value="Liposuction">Liposuction</option>
                        <option value="Lymphatic Massage &amp; Cavitation">Lymphatic Massage &amp; Cavitation</option>
                        <option value="Male BBL">Male BBL</option>
                        <option value="Male Body Contouring">Male Body Contouring</option>
                        <option value="Mommy Makeover">Mommy Makeover</option>
                        <option value="Post Operation Care">Post Operation Care</option>
                        <option value="QWO">QWO</option>
                        <option value="Tummy Tuck">Tummy Tuck</option>
                    </Input>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <Input
                        id="schedule-form-how-heard" 
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setHowHeard(e.target.value)}
                    >
                        <option value={'default'} disabled>How did you hear about us?</option>
                        <option>Search engine (Google, Yahoo, ...)</option>
                        <option>Friend</option>
                        <option>Word of Mouth</option>
                        <option>Press/Article</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Youtube</option>
                        <option>Other</option>
                    </Input>
                </Col>
                <Col>
                    <Input
                        id="schedule-form-reach-time"
                        type="select"
                        defaultValue={'default'}
                        onChange={(e) => setReachTime(e.target.value)}
                    >
                        <option value={'default'} disabled>Best time to reach you</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                    </Input>

                        
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Input
                        id="schedule-form-how-assist"
                        type="textarea"
                        placeholder="How can we assist your aesthetic needs?"
                        value={howAssist}
                        onChange={(e) => setHowAssist(e.target.value)}
                    />
                </Col>
            </Row>

            <div className="d-flex flex-column flex-md-row align-items-md-center">
                <div className="order-md-2 mb-4 mb-md-0">
                    <FormGroup check>
                        <Label for="schedule-form-monthly-emails" check className="pt-1">Opt-in for monthly emails</Label>
                        <Input 
                            id="schedule-form-monthly-emails" 
                            className="me-2"
                            type="checkbox"
                            checked={monthlyEmails}
                            onChange={() => setMonthlyEmails(!monthlyEmails)}
                        />
                    </FormGroup>
                </div>
                <div className="order-md-1 me-0 me-md-4">
                    <Button className="btn-base" type="submit">
                        Schedule Consultation
                        &nbsp;
                        <img className="arrow-right-white" src="./arrow-right.svg" alt="arrow-right"/>
                    </Button>
                </div>                
            </div>

            <Alert isOpen={success} className='my-4 py-2'>
                <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Successfully submitted!</h6>
            </Alert>

            <Alert isOpen={failed} className='my-4 py-2' color='danger'>
                <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Opsss! please try later</h6>
            </Alert>

            {
                spinnerOpen &&
                <div className='d-flex justify-content-center my-4'>
                    <Spinner type='grow' >
                        Loading ...
                    </Spinner>
                </div>
            }
        </Form>
    );
}

export default ScheduleForm;