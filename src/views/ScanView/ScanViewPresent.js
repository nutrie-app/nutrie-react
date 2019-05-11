/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ModBarCodeScannerContainer from '../../components/ModBarCodeScanner/ModBarCodeScannerContainer';

const ScanViewPresent = props => {
  return (
    <ModBarCodeScannerContainer
      handleOnBarCodeRead={props.handleOnBarCodeRead}
      isScanned={props.isScanned}
    />
  );
};

export default ScanViewPresent;
