/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Immediate Response",
    text:
      "We usually work with patient first policy i.e payment will be done after the medical treatments.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership deal",
    title: "Our Helpers",
    text:
      "Our target allows 200+ private ambulances to sign MOUs to their parent companies for ambulances availability.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "No Subscription",
    text:
      " The platform does not take extra charges, allows inline calls and has certified ambulances.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text:
      "24*7 Customer Care Support System. No extra information other than booking details as the app can be used in emergency situations.",
  },
];

export default function KeyFeature() {
  return (
   <section sx = {{ variant : 'section.keyFeature'}} id = "feature">
    <Container>
      <SectionHeader
        slogan = "What's the function"
        title = "Meet the feature of our Product"
       />

      <Grid sx = {styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
