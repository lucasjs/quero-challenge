import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'

import Card, { AddCard } from 'components/Card'

addDecorator(withA11y)

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      courseKind="Presencial"
      courseName="Engenharia Mecânica"
      courseShift="Noite"
      fullPrice={2139.64}
      priceWithDiscount={706.08}
      startDate="01/08/2019"
      universityLogo="https://www.tryimg.com/u/2019/04/16/unip.png"
      universityName="UNIP"
      universityScore="4.5"
      enabled
    />
  ))
  .add('Disabled', () => (
    <Card
      courseKind="Presencial"
      courseName="Engenharia Mecânica"
      courseShift="Noite"
      fullPrice={2139.64}
      priceWithDiscount={706.08}
      startDate="01/08/2019"
      universityLogo="https://www.tryimg.com/u/2019/04/16/unip.png"
      universityName="UNIP"
      universityScore="4.5"
      enabled={false}
    />
  ))
  .add('AddCard', () => (
    <AddCard
      title="Adicionar curso"
      subtitle="Clique aqui para adicionar bolsas de cursos do seu interesse"
      addCourse={action('clicked')}
    />
  ))
