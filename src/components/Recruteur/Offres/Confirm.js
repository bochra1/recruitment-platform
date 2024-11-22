import React, { useContext } from 'react';
import Grid from '@mui/material/Box';
import { Editor } from '@tinymce/tinymce-react';
import offre from '../../../assets/img/offre.jpg';
import { Typography } from '@mui/material';
export default function Confirm() {
    return (
        <Grid item xs={12} md={12}>
            <Editor
                init={{
                    plugins: 'table',
                    table_default_attributes: {
                        border: '10'
                    }
                }}
            />
        </Grid>
    );
}
