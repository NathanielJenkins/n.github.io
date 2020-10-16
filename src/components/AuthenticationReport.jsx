import React, { Component } from "react";
import styled from "styled-components";

import { Container, Row, Col, Table, Image } from "react-bootstrap";

import NavigationBar from "./NavigationBar";

//images
import header from "../img/auth_report_header.jpg";
import structure from "../img/structure.png";
import signing from "../img/signing.png";
import basic from "../img/basic.png";
import OAuth from "../img/OAuth.png";
import jwt from "../img/jwt.png";

const Styled = styled.div`
	h3 {
		margin-bottom: 20px;
	}

	li {
		margin-bottom: 30px;
	}

	div.spaced {
		line-height: 35px;
		margin-bottom: 30px;
		font-size: 19px;
		// text-indent: 40px;
	}
	.img-fluid {
		margin-bottom: 30px;
	}
	@media (max-width: 576px) {
		h1 {
			font-size: 35px !important;
		}
	}
`;

class AuthenticationReport extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<NavigationBar dark />
				<Container className="mt-4">
					<Row>
						<Col>
							<Image
								className="shadow rounded border"
								fluid
								src={header}
							></Image>
							<h1 className="text-center mt-4">
								Comparison of Authentication and Authorization Methods
							</h1>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col>
							<div className="spaced">
								The following report outlines methods of user authorization and
								authentication for accessing a RESTful API. The methods to be
								discussed are: API keys, basic auth, and OAuth. Basic auth and
								key signing methods face significant security concerns since
								both these methods require that sensitive information be sent on
								each request. This increases the probability of data
								interception and decryption. If this information is obtained, it
								may be used to perform malicious requests to alter data or
								collect user sensitive information. OAuth was chosen as the
								authorization / authentication flow as it provides the best
								functionality for the company's needs. It allows users to be
								uniquely identified with a token that may not be altered,
								insuring that the user performing the request is who they say
								they are. In addition, since users can be uniquely identified it
								can distinguish between different types of user accounts and
								evaluate if they have access rights to the requested resource.
								Finally, the token may contain an expiry data, meaning that if
								the token is stolen by a third party it will only be valid for a
								limited amount of time.
							</div>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col className="mx-auto">
							<div className="text-center mb-4">
								<h3>Intended structure of an API in terms of authentication</h3>
								<Image src={structure} fluid className="shadow"></Image>
							</div>
							<div className="spaced">
								There is a RESTful API that exists between the clients and its
								database. This application programming interface takes in
								requests from the clients (other services) authenticates and
								authorizes them. If these requests are valid then the intended
								action is performed. This “action” is usually manipulating some
								kind of data within the database. This could include performing
								any of the four types of requests : get, put, post or delete.
							</div>
						</Col>
					</Row>
					<hr></hr>
					<Row className="mt-4">
						<Col className="mx-auto">
							<div className="text-center mb-4">
								<h3>API Key Signing</h3>
								<Image src={signing} fluid className="shadow"></Image>
							</div>
							<div className="spaced">
								This system provides some form of authentication and
								authorization requests by API key signing. This concept works in
								the following way. The API securely stores a list of keys for
								valid services. When a client creates a request the key is
								passed along with the request. When the API receives the request
								it validates if the key is apart of its list and grants access
								to its resources.
							</div>
							<div className="spaced">
								This system provides authentication that the request came from a
								valid service. However, there are some significant problems with
								the current implementation. For starters, it is obvious that
								this method is susceptible to man in the middle attacks. That
								is, the key sent by the client in a valid request may be
								intersected and saved before it reaches the API. This key may
								then be used on subsequent requests to perform malicious actions
								like retrieval of user information or deleting data.
							</div>
							<div className="spaced">
								In addition, where the system does provide authorization and
								authentication for an entire client, it does not provide this
								for unique users of the client. That is, a request may come from
								a valid client, however, there is no authentication process to
								verify that the information requested belongs to that user. For
								example, when a user wants to access information pertaining to
								themselves, they send the key validating the request and a
								unique identifier along with whatever other information that is
								necessary. If the user changes the unique identifier the system
								will still authenticate the request, since it is coming from a
								valid service but the request is now no longer coming from the
								actual user. In this way a user could obtain information that
								does not belong to them.{" "}
							</div>
							<div className="spaced">
								To fix these problems, we need a way to insure that all request
								traffic is coming from a valid source, authenticate that the
								given user is providing the correct identity, and guarantee the
								user is authorized to perform the requested action. That is,
								different types of users may perform a subset of all requests.
								An admin for example may be allowed to manipulate certain data
								that a user may not.
							</div>
						</Col>
					</Row>
					<hr></hr>
					<Row className="mt-4">
						<Col className="mx-auto">
							<div className="text-center mb-4">
								<h3>Basic Auth</h3>
								<Image src={basic} fluid className="shadow"></Image>
							</div>
							<div className="spaced">
								In this architecture the user supplies their unique
								identification and password. These two parameters are
								concatenated with a colon separating and encoded using base64
								(to insure the request url is safe) then passed in the request
								header to the API. The API should then verify if the user exists
								in the system with the given password they provided. After which
								we can check the role of the unique user and perform the request
								if everything is successful.
							</div>
							<div className="spaced">
								This system fixes the issue of user authentication and user
								authorization. The given user is authenticated by the unique
								identifier and password in the request, and authorized by
								checking the users’ role and verifying that the information they
								request allowed for the role.{" "}
							</div>
							<div className="spaced">
								It should be noted that the system is vulnerable by man in the
								middle attacks. Someone may intercept a request and decode the
								unique identifier and password to be used on subsequent
								requests. This is a huge security consideration, for this reason
								it is required that we do all requests involving username and
								password with HTTPS.
							</div>
							<div style={{ margin: "20%" }} className="text-center">
								<h5>What is HTTPS:</h5>
								<div className="font-italic font-weight-light mb-4">
									At a high level, https allows for encrypted information to be
									sent from the client to the server. This works in the
									following steps: the client and server agree to an encryption
									method, the client verifies the server's identity, client
									encrypts its information using the public key provided by the
									server, and the server decrypts the information using its
									private key. The information passed over the connection is now
									encrypted and reduces the risk of man in the middle attacks
									[5].
								</div>
							</div>
							<div className="spaced">
								The number one drawback to this method is that the password and
								username of the user must be supplied with every request. Even
								if HTTPS is used with the password and username encrypted, this
								sensitive information must still be sent on each request, and
								may be susceptible for credential theft by the following ways.{" "}
							</div>
							<ol>
								<li>
									Brute force private key / lost private key: If the private key
									is obtained, it can be used to decrypt the information
								</li>
								<li>
									Password / username browser caching: which can be used with a
									cross site request forgery, where the user performs unintended
									actions by hidden requests on the page or through malicious
									links they click.
								</li>
								<li>
									Rely on HTTPS to be secure and for all requests to HTTPS: if
									not properly implemented a request may be hijacked and
									SSLstripped to convert it into an HTTP request, at this point
									a man in the middle attack can be performed to obtain the
									credentials
								</li>
							</ol>
							<div className="spaced">
								Basic auth with HTTPS is mostly secure with some small
								considerations mentioned above. The most important of which is
								continuously sending credential information with each request. A
								small oversight in any route could lead to a serious data leak,
								of users passwords and usernames.
							</div>
						</Col>
					</Row>
					<hr></hr>
					<Row className="mt-4">
						<Col className="mx-auto">
							<div className="text-center mb-4">
								<h3>OAuth</h3>
								<Image src={OAuth} fluid className="shadow"></Image>
							</div>
							<div className="spaced">
								The OAuth procedure allows only a single request containing
								username and password to be performed. All subsequent requests
								are granted using the token.
							</div>
							<div className="spaced">
								OAuth works in the following way: the client (the web browser)
								asks for a protected resource from the API. The API will deny
								this request prompting the user to enter their login details.
								The request, along with the login details is sent as a grant to
								the authorization server. The authorization server will
								determine if the user request is valid. That is, is the user
								request within the scope of what they are allowed to access
								(authorized) and are their login credentials valid
								(authenticated)? If either of these are not true it will respond
								with a 401 unauthorized. Otherwise the server will respond with
								an access token. This access token is stored by the client and
								sent with every subsequent request for their specific details.
							</div>
							<div className="spaced">
								In this way the user only provides their login credentials once,
								a significant improvement to both API keys and Basic auth in
								which sensitive system or user information is sent on each
								request.
							</div>
							<div className="spaced">
								This method of authentication and authorization provides several
								useful features. For one, the token provided by the
								authorization server provides a token that is unique to the user
								and to the request. So in this way the API can uniquely
								distinguish which user is performing the request and exactly
								what they are asking the API to do. The API can make an informed
								decision based on the user's role (user or administrator)
								whether they are allowed to perform this request and if they
								are, execute it for this specific user. The users’ details would
								no longer be required in the request, they would be provided
								within the token itself.
							</div>
							<div className="spaced">
								This solution reduces the risk of a man in the middle attack
								since login credentials are only sent once to a secure server.
							</div>
							<div className="spaced">
								As an added bonus, many large companies including facebook,
								google, twitter and so on that users may already have accounts
								with can also be used as a login data. Their secure
								authorization servers may be used to gain an access token and
								exchange this token with our api for a token. This procedure is
								outlined below.
							</div>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col className="mx-auto">
							<div className="text-center mb-4">
								<h3>Local Auth with JWT</h3>
								<Image src={jwt} fluid className="shadow"></Image>
							</div>
							<div className="spaced">
								This report proposes that the company incorporates the OAuth
								flow into their API services. The following system outlines how
								OAuth flow was incorporated as a method to secure data, and
								ensure that each given user may only access their respective
								data when necessary.
							</div>
							<div className="spaced">
								The client will send a request for resources to the API, if they
								do not provide a JSON web token or the token is not valid the
								API will return a 401 unauthorized. To generate a valid JSON
								token the user will supply a unique identifier and a password to
								the API, the API will validate the user. It will return a unique
								token for the user, the token will be provided with every
								request to retrieve valid resources.
							</div>
							<h4 className="text-center">JSON web tokens</h4>
							<div className="spaced">
								The JSON web tokens are extremely powerful. It is made up of the
								following things, header, payload and a signature. The header
								specifies the encryption algorithm and type of token, the
								payload contains the information that will be interpreted by the
								API. It contains the sub, the unique identifier for the user in
								the database, and finally it contains the signature. The
								signature ensures that this token has been issued by the API and
								that it has not been altered along the way. This insures
								protection from man in the middle attacks. If someone alters the
								payload, the token will no longer be accepted by the API and
								return a 401 unauthorized.
							</div>
							<div className="spaced">
								The payload may also include a time issued and expired to insure
								that if a JSON web token get compromised, that is it gets stolen
								from a third party, this party may only use the token until it
								expires. In this way tokens are made more secure if they are
								compromised. Since we supply the user identification in the
								payload, and we know the payload has not been altered, Then we
								will return information for the user in the payload.
							</div>
						</Col>
					</Row>
					<Row className="mt-4">
						<Col className="mx-auto">
							<h3 className="text-center mb-4">Conclusions</h3>
							<div className="spaced">
								OAuth flow with JWT token was chosen as the best alternative to
								authenticate and authorize user requests in the API. This method
								was chosen because it provides a higher level of security and
								precision than key signing or basic authentication. OAuth with
								JWT supports these benefits by relying on the token as the means
								of user authentication and authorization. The token does not
								contain any sensitive information like basic authentication
								method or key signing requires. For key signing, if the key is
								stolen, this person may perform any action as any user within
								the single resource they obtained the key from. Alternatively,
								if a basic auth request is intercepted and decrypted this person
								will be able to obtain the login credentials for that specific
								user. Since many users have identical passwords over many sites
								this is a huge security concern.{" "}
							</div>
							<div className="spaced">
								For these reasons OAuth with JWT was chosen to authenticate and
								authorize user requests. On each request a JWT token is sent to
								the API. This token does not contain any sensitive information,
								only a unique identifier for the user. In addition, each token
								has an expiry date, so if the token is intercepted or lost this
								token will only be useful for a limited amount of time before it
								is considered invalid.{" "}
							</div>
							<div className="spaced">
								In addition, OAuth flow is already used as an authentication
								method for google, facebook and others. So it is easier to
								implement login and authenticate with a trusted third party.
								Preventing the user from entering an email or password into the
								system. For all these reasons, OAuth provides the best solution
								for providing security and accuracy by authenticating and
								authorizing unique and dependent user requests.{" "}
							</div>
						</Col>
					</Row>
				</Container>
			</Styled>
		);
	}
}

export default AuthenticationReport;
