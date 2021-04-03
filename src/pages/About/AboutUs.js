import { Grid } from "@material-ui/core";
import { FooterDesktop } from "../../components";
import { AboutUsStyles } from "./AboutUsStyles";

function AboutUs() {
  const classes = AboutUsStyles();
  return (
    <Grid container className={classes.root1}>
      <Grid container item spacing={2} className={classes.cartContainer}>
        <Grid container className={classes.cartContainerInside}>
          <Grid item xs={12} sm={12} className={classes.headingGrid}>
            <span className={classes.heading}>ABOUT US</span>
          </Grid>
          <p className={classes.contentFontSize}>
            One day, not so long ago, a bunch of foodies in the corporate world
            realized how fruits and veggies are being neglected in our daily
            meal and decided to address this, to bring a smile on every face.
            <p className={classes.p}>
              The rationale behind the brand 100N is, introducing fruits and
              vegetables back into our everyday meal to bring the right
              nutrition required in this new age, #NewAgeNutrition.
            </p>
          </p>
          <div className={classes.contectFlex}>
            <p className={classes.block}>Our Motto</p>
            <p className={classes.block}>
              <strong>EAT GOOD. FEEL GOOD.</strong>
            </p>
          </div>
          <div className={classes.contentHeight}>
            Our wholesome menu is smartly designed to maintain a perfect balance
            of nutrition and deliciousness.
          </div>

          <Grid container alignItems="stretch" xs={12} spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className={classes.content}>
                <h3>COLD PRESSED JUICES</h3>
                <p>
                  90% of our juices are purely extracted from fruit – NO SUGAR,
                  NO WATER, NO ICE, the rest 10% (centrifugal juices) are
                  slightly altered for better taste
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.content}>
                <h3>HOME MADE BREADS</h3>
                <p>
                  Our Sandwiches are exclusively are made from home baked breads
                  to give that freshness and smooth taste
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.content}>
                <h3>SALADS FOR INDIAN PALETTE</h3>
                <p>
                  Salads are a key aspect of any fitness or health regime. We
                  serve world class salads with a twist of Indian flavour to let
                  your taste buds also love them
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.content}>
                <h3>QUALITY AND HYGIENE</h3>
                <p>
                  Are the foundational principles of our brand. We believe by
                  delivering at the highest quality, even at added cost for us,
                  we will achieve our most important objective – YOUR TRUST &
                  SATISFACTION !
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <FooterDesktop />
    </Grid>
  );
}

export default AboutUs;
