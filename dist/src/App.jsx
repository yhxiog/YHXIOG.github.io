'use strict';
import React, { useState, useEffect, memo } from 'react';

import './App.css';

export default memo((props) => {
  return (
    <div className="flex-col mod">
      <div className="flex-row view">
        <img
          className="logo"
          src={'../images/img_0.png'}
        />
        <img
          className="logo-1"
          src={'../images/img_1.png'}
        />
      </div>
    </div>
  );
});
