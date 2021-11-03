import { FormControl, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//CSS
import '../contactUs/contact_us.css';

const formData = ['Name', 'Email', 'Subject'];

const ContactUs = () => {
    const formDataJSX = formData.map((item, indx) => {
        return (
            <Box key={indx} className="box_input">
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                    }}
                >
                    <TextField
                        id="input-with-sx"
                        label={item}
                        variant="standard"
                    />
                </Box>
            </Box>
        );
    });
    return (
        <section className="contact_us_block">
            <div className="contact_block_about">
                <h1 className="contact_block_h1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </h1>
                <p className="contact_block_p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                </p>
            </div>{' '}
            <div className="container d_flex">
                <div className="contact_wrapper">
                    <div className="contact_us_form">
                        <h1 className="contact_us_form_h1">contact us</h1>
                        {formDataJSX}
                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: '25ch' }}>
                                <OutlinedInput placeholder="Please write text here..." />
                            </FormControl>
                        </Box>
                        <div className="contact_btn">
                            <a href="/#" alt="login">
                                submit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
