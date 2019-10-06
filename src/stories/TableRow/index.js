import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import TableRow from 'components/TableRow'

addDecorator(withA11y)

storiesOf('TableRow', module)
  .add('Default', () => (
    <table>
      <tbody>
        <TableRow
          id={1}
          courseName="Engenharia Mecânica"
          courseLevel="Bacharelado"
          discountPercentage={67.0}
          priceWithDiscount={706.08}
          universityLogo="https://www.tryimg.com/u/2019/04/16/unip.png"
          universityName="UNIP"
        />
      </tbody>
    </table>
  ))
