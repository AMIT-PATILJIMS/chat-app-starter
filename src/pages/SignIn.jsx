import React from 'react';
import { Container, Grid, Panel, Row, Col, Button, Alert } from 'rsuite';
import { auth,database } from '../misc/firebase';
import firebase  from 'firebase';

const SignIn = () => {

    const signInWithProvider = async provider => {
        provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');

        try{
            const { additionalUserInfo,user } =  await auth.signInWithPopup(provider);

            if(additionalUserInfo.isNewUser)
            {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP,

                })
            }
            Alert.success("Signed In",4000);
        }
        catch(err){
            Alert.info(err.message, 4000);
        }
        finally{
            console.log('the try catch block is executed');
        }           
    };

    return <Container>
        <Grid className="mt-page">
            <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2>Welcome to Chat</h2>
                            <p>You can chat with your friends</p>
                        </div>

                        <div>
                            <br/>
                            <Button className="button button1" onClick = { signInWithProvider }>
                                Continue with Google
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>
};


export default SignIn;