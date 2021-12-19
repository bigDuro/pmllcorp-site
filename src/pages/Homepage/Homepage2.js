import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { LearnMoreLink } from '../../components/atoms';
import { Section, SectionAlternate } from '../../components/organisms';
import { SectionHeader } from '../../components/molecules';
import { Programs, Location, MortgageRefinanceCalc, Hero } from '../../components';
import { loanPrograms } from '../../constants'


function Homepage(props) {
  const { history } = props;

  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Hero/>
          <Divider/>
        </Grid>

        <Grid item xs={12}>
          <Section>
            <Grid item xs={12} md={12} data-aos="fade-up">
              <SectionHeader
                title=" We are ready, willing, and able to help you find the product..."
                subtitle="Prepare to walk an illuminated path on your journey with us as you are never left in the dark...."
                align="left"
                label="109+ Loan Programs"
                ctaGroup={[
                  <LearnMoreLink
                    title="Learn About our Programs"
                    onClick={() => history.push('/loan-programs')}
                    variant="h6"
                  />,
                ]}
                disableGutter
              />
            </Grid>
            <Programs data={loanPrograms} history={history} trim={true} cols={3}/>
          </Section>
          <Divider />
          <SectionAlternate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <MortgageRefinanceCalc/>
              </Grid>
            </Grid>
          </SectionAlternate>
          <Divider />
          <Section>
            <Location />
          </Section>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default Homepage;
