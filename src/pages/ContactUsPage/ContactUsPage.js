import React from 'react';
import { Grid } from '@material-ui/core';
import { Section } from '../../components/organisms';
import { SectionHeader } from '../../components/molecules';
import { Location} from '../../components';


function ContactUsPage() {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
          <Section>
            <Grid item xs={12} md={12} data-aos="fade-up">
              <SectionHeader
                title=""
                align="left"
                label="Cincinnati  · NMLS# 1812948"
                disableGutter
              />
              <Location />
            </Grid>
          </Section>
      </Grid>
    </React.Fragment>
  )
}

export default ContactUsPage;
