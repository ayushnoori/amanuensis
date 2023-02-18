import type { ComponentMeta } from '@storybook/react'

import SpeechTestPage from './SpeechTestPage'

export const generated = () => {
  return <SpeechTestPage />
}

export default {
  title: 'Pages/SpeechTestPage',
  component: SpeechTestPage,
} as ComponentMeta<typeof SpeechTestPage>
