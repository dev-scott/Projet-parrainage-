import React from 'react'
import "./SignUp.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import ImagePassword from "../../Img/Enter Password.png"

import {
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormHelperText,
    FormGroup,
    Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";




const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="contain_sigUp">

            <div className="contain_left">

                <div className="left_img">
                    <img src={ImagePassword} alt="" />

                </div>
                <div className="left_text">

                    <h1>
                        Laisser vous guider par votre parrain

                    </h1>
                    <p>
                        Vous etes le seule a savoir ce que vous voulais , <br /> mais nous savons commment vous pouver l'avoir
                    </p>

                </div>

            </div>
            <div className="contain_right">
                <div className="right_top">
                    <span>  <FontAwesomeIcon icon={faWarehouse} /> </span>
                    <h1> Merci de vous connecter </h1>
                    <p>Nous vous sommes la et allons vous fournir le mentor de vos revees <br /> faite nous confiance</p>

                </div>
                <div className="righ_middle">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="outlined-basic"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            {...register("firstName", { required: "First Name is required." })}
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            {...register("lastName", { required: "Last Name is required." })}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                            style={{ marginTop: "10px" }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            name="email"
                            {...register("email", { required: "E-mail Address is required." })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            style={{ marginTop: "10px" }}
                        />
                        {/* Radio button */}
                        <FormControl error={Boolean(errors.gender)} >
                            <FormLabel component="legend"> Choose Your Gender </FormLabel>
                            <RadioGroup row aria-label="gender" name="gender">
                                <FormControlLabel
                                    value="female"
                                    control={
                                        <Radio {...register("gender", { required: "Choose your gender" })} />
                                    }
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={
                                        <Radio {...register("gender", { required: "Choose your gender" })} />
                                    }
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={
                                        <Radio {...register("gender", { required: "Choose your gender" })} />
                                    }
                                    label="Other"
                                />

                            </RadioGroup>
                            <FormHelperText style={{ color: '#d32f2f' }}>{errors.gender?.message}</FormHelperText>
                        </FormControl>
                        <div className="clearfix"></div>
                        {/* Check box */}
                        <FormGroup
                            error={Boolean(errors.tnc)}
                            style={{ display: "block", marginTop: "17px" }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox name="tnc" {...register("tnc", { required: "please aggre our terms and condtions" })} />
                                }
                                label="I aggree all terms and conditions"
                            />
                        </FormGroup>
                        <FormHelperText style={{ color: '#d32f2f' }}>{errors.tnc?.message}</FormHelperText>
                        <div className="clearfix"></div>
                        <Button variant="contained" color="primary" type="submit" className="btns" >
                            create new account
                        </Button>
                    </form>
                </div>
                <div className="right_bottom">


                </div>


            </div>

        </div>
    )
}

export default SignUp