/* istanbul ignore file */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoaderSuspense } from '.';

type LoaderSuspenseExport = ComponentMeta<typeof LoaderSuspense>;
type LoaderSuspenseStory = ComponentStory<typeof LoaderSuspense>;

export default {
  title: 'Loader With React Suspense',
  component: LoaderSuspense,
  args: {},
} as LoaderSuspenseExport;

const Template: LoaderSuspenseStory = (args) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <LoaderSuspense {...args} />
    </div>
  );
};

export const LoaderSuspenseTemplate = Template.bind({});

LoaderSuspenseTemplate.args = {};
