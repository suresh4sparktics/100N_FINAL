import { Grid } from "@material-ui/core";
import { FooterDesktop } from "../../components";
import { TermsConditionStyles } from "./TermsConditionStyles";

function TermsCondition() {
  const classes = TermsConditionStyles();
  return (
    <Grid container className={classes.root1}>
      <Grid container spacing={2} className={classes.cartContainer}>
        <Grid container spacing={2} className={classes.cartContainerInside}>
          <Grid item xs={12} sm={12} className={classes.headingGrid}>
            <span className={classes.heading}>Terms And Conditions</span>
          </Grid>
          <p>
            M/s Rust and Rusted Pvt Ltd herein after referred to as the “Owner”
            through the brand name 100N is the owner of this website. 100N is
            registered trademark of the Owner and any replication/duplication
            and reuse of the same is liable for legal prosecution.{" "}
          </p>
          <p>
            All content including but not limited to logos, pictures, graphic
            designs, scripts, texts etc are sole property of the Owner and all
            Unwarranted replication/copy of the content is strictly prohibited
            and illegal
          </p>
          <div>
            <h3>PRIVACY POLICY:</h3>
            <p>
              Any information provided by the customer on this website shall be
              safeguarded with utmost sincerity and shall be used by the owner
              only to the extent of refining the experience of the customer and
              to communicate to the customer regarding his/her order and/or
              regarding any offers/promotions run solely by the owner.
            </p>
            <p>
              The owner shall not in any condition share the information
              provided by the customer to any third party without express
              consent of the customer.
            </p>
          </div>
          <p>
            That’s it! We will update/ refine if and when there will be a need
            and will keep you informed of the updation
          </p>
        </Grid>
      </Grid>
      <FooterDesktop />
    </Grid>
  );
}

export default TermsCondition;

// https://camellia.chaayos.com/neo-service/rest/v1/c/v/r2
// https://camellia.chaayos.com/neo-service/rest/v1/c/lkp
