import React, {useRef,useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../Context/Auth'
import {Link} from 'react-router-dom';

function ForgotPassword() {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false)
    const [message, setMessage] = useState("");

     async function handleSubmit(e){
        e.preventDefault();
        try{
            setMessage("");
            setError("");
            setLoading(true); 
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for futher instructions');
        }catch(err){
            console.log(err.message);
            setLoading(false);
            setError(err.message);
        }
    }

    return (
        <div className="forgetpassword-wrapper">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" >Password Reset</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Button disabled={loading} type="submit" className="w-100">Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    <Link to="/login" >Login</Link>
                </div>
                </Card.Body>

            </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup" >Sign Up</Link>
                </div>

        </div>
    )
}

export default ForgotPassword
