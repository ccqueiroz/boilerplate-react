import React from 'react';
import { ClipLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';
import { theme } from '../../../config/stylesGlobal/theme';
import * as Styles from './styles';

export type LoaderSuspenseParams = LoaderSizeProps;

const LoaderSuspense: React.FC<LoaderSuspenseParams> = ({
  color = theme.colors.primaryColor,
  speedMultiplier = 0.8,
  size = 40,
  ...props
}) => {
  return (
    <Styles.ContainerLoaderSuspense data-testid="Loader-Suspense">
      <ClipLoader size={size} color={color} speedMultiplier={speedMultiplier} {...props} />
    </Styles.ContainerLoaderSuspense>
  );
};

export { LoaderSuspense };
