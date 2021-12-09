/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Loading skeleton component for landing page in case there is not yet response from api
export default function LandingSkeleton() {
  return (
    <>
      {[1, 2, 3, 4].map(() => (
        <div className="country-card landing-skeleton" key={uuidv4()}>
          <h3 />
          <p />
          <p />
          <p />
          <div>
            <span />
            <span />
          </div>
        </div>
      ))}
    </>
  );
}
