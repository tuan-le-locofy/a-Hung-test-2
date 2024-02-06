import { FunctionComponent } from "react";
import styles from "./FilteredResultsContainer.module.css";

type FilteredResultsContainerType = {
  imageDimensions?: string;
  roomTypeDescription?: string;
  hotelImageUrl?: string;
  productDimensions?: string;
  imageDimensionsAlt?: string;
};

const FilteredResultsContainer: FunctionComponent<
  FilteredResultsContainerType
> = ({
  imageDimensions,
  roomTypeDescription,
  hotelImageUrl,
  productDimensions,
  imageDimensionsAlt,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={imageDimensions} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.resultAndVideo}>
            <div className={styles.kingBedStandard}>{roomTypeDescription}</div>
            <b className={styles.holidayInnExpre}>{hotelImageUrl}</b>
            <div className={styles.review}>
              <div className={styles.reviews}>(1,136 reviews)</div>
              <div className={styles.stars}>
                <div className={styles.div}>4.7</div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src={productDimensions}
                />
              </div>
            </div>
          </div>
          <img className={styles.videoIcon} alt="" src={imageDimensionsAlt} />
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s286}>$S 286</b>
            <div className={styles.night}>/night</div>
          </div>
          <button className={styles.viewDetailsButton}>
            <div className={styles.viewDetailsButtonChild} />
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilteredResultsContainer;
