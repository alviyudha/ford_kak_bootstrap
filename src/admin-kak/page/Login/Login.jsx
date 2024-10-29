import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Alert,
  Spinner,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../../state/login/action";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await dispatch(asyncSetAuthUser({ username, password }));
      navigate("/admin-ford/dashboard");
    } catch (err) {
      setError("Invalid username or password. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5} xl={4}>
          <div className="text-center mb-4">
            <h3>Login</h3>
          </div>
          <Form onSubmit={handleLogin}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  {" Loading..."}
                </>
              ) : (
                "Login"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
