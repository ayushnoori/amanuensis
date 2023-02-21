import type { ComponentMeta } from '@storybook/react'

import OwnProfilePage from './OwnProfilePage'

export const generated = () => {
  return <OwnProfilePage />
}

export default {
  title: 'Pages/OwnProfilePage',
  component: OwnProfilePage,
} as ComponentMeta<typeof OwnProfilePage>
