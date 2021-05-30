/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Quick Response",
    text:
      "We ensure that no patient is left behind in cases of emergency. Our 24X7 instant booking facility will allow the users to book ambulances from thei nearby areas within a second",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "Partnership",
    text:
      'Our application allows the nearby car garage and owners to get their vehicles converted into "Fast Service Ambulances". This will ensure maximum services at peek time in case of emergency or unavailability of ambulances.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "Users, specially the COVID-19 patients can donate their medicine after the recovery to the needy once in case of unavailability under the supervision of doctor. User can upload the prescription under the examination of a doctor.",
  },
  {
    id: 4,
    imgSrc: Subscription,
    altText: "Subscription",
    title: "Conclusion",
    text:
      "• Ambula can be very useful in pre and post pandemic in cases of emergency and medical treatments. High financial expenses related to booking an ambulance can be easily minimised. Medication can be easily available under supervision of doctor.",
  },
];
export default function Feature() {

  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Some important Uses"
          title="Describing the situations in which a product or service could potentially be used."
        />
        <Grid sx = {styles.grid}>
          {data.map((item) => (
            <FeatureCard 
              key = {item.id}
              src = {item.imgSrc}
              alt = {item.altText}
              title = {item.title}
              text = {item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
