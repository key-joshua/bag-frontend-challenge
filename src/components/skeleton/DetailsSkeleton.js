/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Loading skeleton component for details page in case there is not yet response from api
export default function DetailsSkeleton() {
  return (
    [1].map(() => (
      <div className="details-container details-skeleton-container" key={uuidv4()}>
        <div className="details-wrapper1 details-skeleton-wrapper1" />

        <div className="details-wrapper2 details-skeleton-wrapper2">
          <h3 />
          <div className="details-wrapper2-first-div ">
            <div className="details-wrapper2-child details-skeleton-wrapper2-child">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="details-wrapper2-child details-skeleton-wrapper2-child">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="details-wrapper2-second-div details-skeleton-wrapper2-second-div" />
        </div>

      </div>
    ))
  );
}
