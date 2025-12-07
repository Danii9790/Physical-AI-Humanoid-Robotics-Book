import React from 'react';
import Layout from '@theme-original/Layout';
import SupportAgent from '@site/src/components/SupportAgent';

export default function LayoutWrapper(props: any) {
  return (
    <>
      <Layout {...props} />
      <SupportAgent />
    </>
  );
}