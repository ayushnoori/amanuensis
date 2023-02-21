import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DoctorDashboardLayout from './DoctorDashboardLayout'

export const generated: ComponentStory<typeof DoctorDashboardLayout> = (args) => {
  return <DoctorDashboardLayout {...args} />
}

export default {
  title: 'Layouts/DoctorDashboardLayout',
  component: DoctorDashboardLayout,
} as ComponentMeta<typeof DoctorDashboardLayout>
