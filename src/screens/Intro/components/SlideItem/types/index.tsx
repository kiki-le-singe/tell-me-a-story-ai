import React from 'react';

export type SlideProps = React.PropsWithChildren<{
  slideStyles?: object;
  isLastItem?: boolean; // this props allows to do/add something for the last item
  isLastItemSelected?: boolean; // this props allows to do/add something just when the last item is selected
}>;
