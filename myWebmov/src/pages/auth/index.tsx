
import { Grid ,  Header ,Form , Segment, Button   } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationlogin } from "./mutation";
import { useNavigate} from "react-router-dom";


export const Auth  =()=> {

    const { data , mutate } = useMutation({
        mutationKey: ["Login"],
        mutationFn: mutationlogin
    });

    const navigate = useNavigate() ;
    
    const handleLogin = async() => {

     await mutate() ;
     localStorage.setItem("guest_session_id",data.guest_session_id);
     };
    return (

        <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="violet" textAlign="center">
                    Welcom ! login by regestration as aGuest belwo.
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Button color="violet" size="large" fluid onClick={handleLogin}>
                            {""}
                            login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>

    );

}