import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PatientDashboardLayout from './PatientDashboardLayout'

export const generated: ComponentStory<typeof PatientDashboardLayout> = (args) => {
  return <PatientDashboardLayout {...args} />
}

export default {
  title: 'Layouts/PatientDashboardLayout',
  component: PatientDashboardLayout,
} as ComponentMeta<typeof PatientDashboardLayout>
